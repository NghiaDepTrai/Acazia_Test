import React from "react";
import { Button } from "antd";
import { PhoneOutlined, FrownOutlined, CalendarOutlined, LockOutlined, HeatMapOutlined } from "@ant-design/icons";
function ButtomComponent(props) {
  const changeTypeSelected = (type) => () => {
    props.changeTypeSelected(type);
  };
  return (
    <div>
      <Button onClick={changeTypeSelected("Email")} className="button-icon">
        <FrownOutlined style={{ fontSize: "40px", color: props.typeSelected === "Email" ? "mediumspringgreen" : "" }} />
      </Button>
      <Button onClick={changeTypeSelected("Birthday")} className="button-icon">
        <CalendarOutlined
          style={{ fontSize: "40px", color: props.typeSelected === "Birthday" ? "mediumspringgreen" : "" }}
        />
      </Button>
      <Button onClick={changeTypeSelected("Address")} className="button-icon">
        <HeatMapOutlined
          style={{ fontSize: "40px", color: props.typeSelected === "Address" ? "mediumspringgreen" : "" }}
        />
      </Button>
      <Button onClick={changeTypeSelected("Phone")} className="button-icon">
        <PhoneOutlined style={{ fontSize: "40px", color: props.typeSelected === "Phone" ? "mediumspringgreen" : "" }} />
      </Button>

      <Button onClick={changeTypeSelected("lock")} className="button-icon">
        <LockOutlined style={{ fontSize: "40px", color: props.typeSelected === "lock" ? "mediumspringgreen" : "" }} />
      </Button>
    </div>
  );
}
export default React.memo(ButtomComponent);
