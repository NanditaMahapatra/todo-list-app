import React, { useState } from "react";
import { data } from "../assets/data";
import ListItems from "./ListItems";
import ToDoListButtons from "./ToDoListButtons";
import PopUpBox from "./PopUpBox";

export default function ToDoBox(props) {
  const [listItems, setListItems] = useState(data);
  const [isOpen, setToggleModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Edit");

  const onToggle = (id) => {
    setListItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );

    // use implicit return using () in arrow function instead of using { return } statement
  };

  const saveTodo = () => {
    setListItems((prev) =>
      prev.map((item) =>
        selected && selected.id === item.id
          ? { ...item, listItem: text }
          : item,
      ),
    );
    setSelected(null);
    setToggleModal(false);
  };

  const setSelectedText = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    setSelected(null);
    setText("");
    setTitle("Add");
    setToggleModal(true);
  };

  const createTodo = () => {
    setListItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        listItem: text,
        isDeleted: false,
        isCompleted: false,
      },
    ]);
    setToggleModal(false);
  };

  const deleteListItem = (id) => {
    setListItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDeleted: true } : item,
      ),
    );
  };

  return (
    <>
      {isOpen && (
        <PopUpBox setToggleModal={setToggleModal}>
          <div className="modal-children">
            <h2 className="title">{title}</h2>
            <input type="text" value={text} onChange={setSelectedText} className="input-box"/>
            <div className="modal-buttons">
              <button
                onClick={title === "Edit" ? saveTodo : createTodo}
                className="buttons"
              >
                Save
              </button>
              <button className="buttons" onClick={() => setToggleModal(false)}>
                Close
              </button>
            </div>
          </div>
        </PopUpBox>
      )}
      <button className="buttons" id="add-button" onClick={addTodo}>
        Add
      </button>
      <div className="todos-div">
        {listItems.map((item) => {
          if (!item.isDeleted)
            return (
              <ListItems
                key={item.id}
                id={item.id}
                listItem={item.listItem}
                item={item}
                onToggle={onToggle}
                setToggleModal={setToggleModal}
                setSelected={setSelected}
                setTitle={setTitle}
                setText={setText}
                deleteListItem={deleteListItem}
              />
            );
        })}
      </div>
    </>
  );
}
