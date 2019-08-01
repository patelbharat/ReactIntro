import React from "react";
import Card from "./Card";

function ToDo(props) {
  return (
    <Card>
      <div className="todo">
        <p>{props.task}</p>
      </div>
    </Card>
  );
}

export default ToDo;
