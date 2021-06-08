import _ from "lodash";
import "./styles.scss";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { offLoadingAction, onLoadingAction } from "../../containers/redux/action";
import ButtomComponent from "./layout/buttom-component";
import CardComponent from "./layout/card";
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
        const listFavoriteUser = JSON.parse(localStorage.getItem("listFavorite")) || [];
        if (!listFavoriteUser.find((x) => x.email === detail.email)) {
          listFavoriteUser.push(detail);
          localStorage.setItem("listFavorite", JSON.stringify(listFavoriteUser));
        }
      }
      props.offLoadingAction();
    } catch {
      props.offLoadingAction();
    }
  };
  const swiper = useCallback(
    (number) => {
      if (number === "1") {
        getDetailPerson("");
      }
      if (number === "3") {
        getDetailPerson("right");
      }
    },
    [state.detailPerson]
  );

  const changeTypeSelected = useCallback(
    (type) => {
      setState((state) => ({
        ...state,
        typeSelected: type,
      }));
    },
    [state.typeSelected]
  );
  return (
    <div className="container">
      <div>
        <CardComponent swiper={swiper} typeSelected={state.typeSelected} detailPerson={state.detailPerson} />
        <div className="buttom">
          <ButtomComponent changeTypeSelected={changeTypeSelected} typeSelected={state.typeSelected} />
        </div>
      </div>
    </div>
  );
}
