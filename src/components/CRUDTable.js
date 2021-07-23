import React from "react";
import CRUDTableRow from "./CRUDTableRow";

const CRUDTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="mt-5">
      <h3> table </h3>
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>name</th>
            <th>lastname</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3"> no data </td>
            </tr>
          ) : (
            data.map((x) => (
              <CRUDTableRow
                key={x.id}
                x={x}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CRUDTable;
