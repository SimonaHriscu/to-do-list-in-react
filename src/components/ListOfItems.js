import React from "react";

const ListOfItems = (props) => {
  // console.log(props.list);

  const toDoList = props.list.map((item, i) => {
    return (
      <li key={i}>
        {item}
        <div className="actions">
        <button className="check-btn" onClick={() => props.del(item)}>
          ✔
        </button>
        <button className="delete-btn" onClick={() => props.del(item)}>
          ✗
        </button>
        </div>
      </li>
    );
  });

  return <ul>{toDoList}</ul>;
};

export default ListOfItems;
