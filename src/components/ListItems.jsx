import { React } from "react";

export default function ListItems(props) {
  const setToggleModal = props.setToggleModal;
  const editListItem = (id) => {
    
    props.setSelected(props.item);
    props.setText(props.item.listItem)
    props.setTitle("Edit");
    setToggleModal(true);
  };

  return (
    <div className="listItem" key={props.id}>
      <input
        type="checkbox"
        checked={props.item.isCompleted}
        onChange={() => props.onToggle(props.id)}
        id={"checkbox-" + props.id}
      />

      <span
        style={{
          textDecoration: props.item.isCompleted ? "line-through" : "none",
          opacity: props.item.isCompleted ? 0.6 : 1,
        }}
      >
        {props.listItem}
      </span>

      <div className="list-buttons">
        <button
          className="buttons"
          id="edit"
          onClick={() => editListItem(props.id)}
        >
          {" "}
          Edit
        </button>
        <button
          className="buttons"
          id="delete"
          onClick={() => props.deleteListItem(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
