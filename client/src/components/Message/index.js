import React from "react";
import Alert from "@material-ui/lab/Alert";


const getStyle = props => {
  let baseClass;
  if (props.message.msgError) baseClass =  "error";
  else baseClass =  "success";
  return baseClass;
};

const Message = props => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Alert variant="filled" severity={getStyle(props)}>
        {props.message.msgBody}
      </Alert>
    </div>
  );
};

export default Message;
