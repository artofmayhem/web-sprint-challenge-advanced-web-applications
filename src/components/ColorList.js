import React, { useState } from "react";
import EditMenu from './EditMenu'
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
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
    .then(res => {
      console.log('2. res from saveEdit in ColorList', res)
      updateColors(
        colors.map((color) => {
          if (color.id === colorToEdit.id) {
            return res.data
          } else {
            return color
          }
        })
      )
      setColorToEdit(initialColor)
      setEditing(false)
    })
    .catch(error => console.log('ERR_THREE: This error is from saveEdit attempt in ColorList:', error))

  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`, color)
    .then(res => console.log('3. res data from delete color in ColorList', res.data))
    .catch(error => console.log('ERR_FOUR: This error is from deleteColor attempt in ColorList: ', error))
  }

  return (
    <div className="colors-wrap">
      <h1>colors</h1>
      <ul>
        {colors.map((color, idx)=> (
          <li key={idx} onClick={() => editColor(color)}>
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