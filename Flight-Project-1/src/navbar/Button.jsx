import React from "react";
import { Button } from "react-bootstrap";

function Btn(props) {
  return (
    <div>
      <Button className="btn  m-1 " variant="primary" onClick={props.funcName}>
        {props.value}
      </Button>
    </div>
  );
}

export default Btn;
