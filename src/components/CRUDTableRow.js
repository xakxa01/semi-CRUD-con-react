import React from "react";

const CRUDTableRow = ({ x, setDataToEdit, deleteData }) => {
  const { name, lastname, id } = x;

  return (
    <tr>
      <td>{name}</td>
      <td> {lastname} </td>
      <td>
        <button
          className="btn btn-warning m-1"
          onClick={() => setDataToEdit(x)}
        >
          edit
        </button>
        <button className="btn btn-danger m-1" onClick={() => deleteData(id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default CRUDTableRow;
