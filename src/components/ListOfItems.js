import React from "react";

const ListOfItems = (props) => {
  console.log(props.list);

  const toDoList = props.list.map((item) => (
    <li
      key={item.id}
      // style={props.style}
    >
      {item.title}

      <div className="actions">
        <input className="check-btn"
          type="checkbox"
          value={item.done}
          
          onChange={() => props.check(item.id)}
          //  ✔
        />
        <button className="delete-btn" onClick={() => props.del(item.id)}>
          ✗
        </button>
      </div>
    </li>
  ));

  return <ul>{toDoList}</ul>;
};

export default ListOfItems;
