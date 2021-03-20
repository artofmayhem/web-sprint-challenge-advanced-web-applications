import React, { useState } from "react";
import EditMenu from './EditMenu'
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, FetchColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => editColor())
    .catch(error => console.log('ERR_THREE: This error is from saveEdit attempt in ColorList:', error))
  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`, color)
    .then(res => FetchColors())
    .catch(error => console.log('ERR_FOUR: This error is from deleteColor attempt in ColorList: ', error))
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.