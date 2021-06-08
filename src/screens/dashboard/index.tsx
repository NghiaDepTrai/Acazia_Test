import _ from "lodash";
import "./styles.scss";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { offLoadingAction, onLoadingAction } from "../../containers/redux/action";
import { setListFavoriteAction } from "./redux/action";
import ButtomComponent from "./layout/buttom-component";
import TinderCard from "react-tinder-card";
interface IState {
  detailPerson: {
    username: string;
    picture: string;
    gender: string;
    phone: string;
    email: string;
    dob: string;
    location: {
      street: string;
    };
  };
  typeSelected: string;
}
export default function DashboardComponent(props) {
  const [state, setState] = useState<IState>({
    detailPerson: {
      username: "",
      picture: "",
      gender: "",
      phone: "",
      email: "",
      dob: "",
      location: {
        street: "",
      },
    },
    typeSelected: "",
  });
  useEffect(() => {
    getDetailPerson("");
  }, []);
  const dispatch = useDispatch();
  props = useSelector<any, any>((state) => ({
    ...props,
    listFavorite: state.screens.listFavorite,
    onLoadingAction: () => dispatch(onLoadingAction()),
    offLoadingAction: () => dispatch(offLoadingAction()),
    setListFavoriteAction: (payload) => dispatch(setListFavoriteAction(payload)),
  }));
  const getDetailPerson = async (type) => {
    try {
      props.onLoadingAction();
      const person = await axios.get("https://randomuser.me/api/0.4/?randomapi");
      const detail = person.data.results[0].user;
      setState((state) => ({
        ...state,
        detailPerson: detail,
        typeSelected: "Phone",
      }));
      if (type === "right") {
        const listFavoriteUser = props.listFavorite;
        if (!listFavoriteUser.find((x) => x.email === detail.email)) {
          listFavoriteUser.push(detail);
          props.setListFavoriteAction(listFavoriteUser);
          localStorage.setItem("listFavorite", JSON.stringify(listFavoriteUser));
        }
      }
      props.offLoadingAction();
    } catch {
      props.offLoadingAction();
    }
  };
  const changeTypeSelected = useCallback(
    (type) => {
      setState((state) => ({
        ...state,
        typeSelected: type,
      }));
    },
    [state.typeSelected]
  );
  const handleChangeText = (typeSelected) => {
    return `My ${typeSelected} is `;
  };
  const onSwipe = (direction) => {
    getDetailPerson(direction);
  };
  const { picture, username, location, phone, email, dob } = state.detailPerson;
  const db = [state.detailPerson];
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );
  const text = useMemo(() => handleChangeText(state.typeSelected), [state.typeSelected, state.detailPerson]);
  const infor = useMemo(() => {
    switch (state.typeSelected) {
      case "Phone":
        return phone;
      case "Address":
        return _.startCase(location.street);
      case "Email":
        return email;
      case "Birthday":
        return dob;
    }
  }, [state.typeSelected, state.detailPerson]);
  return (
    <div className="container">
      <div>
        {db.map((character, index) => (
          <TinderCard
            preventSwipe={["right", "left"]}
            ref={childRefs[index]}
            key={character.username}
            onSwipe={(dir) => onSwipe(dir)}
          >
            <div className="person">
              <div className="person-photo">
                <img className="img" src={`${picture}`} alt={username} />
              </div>
              <div className="person-description">
                <p className="person-name-age">{text}</p>
                <p className="person-info">{infor}</p>
              </div>
            </div>
          </TinderCard>
        ))}
        <div className="buttom">
          <ButtomComponent changeTypeSelected={changeTypeSelected} typeSelected={state.typeSelected} />
        </div>
      </div>
    </div>
  );
}
