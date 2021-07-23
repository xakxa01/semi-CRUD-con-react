import React, { useState } from "react";
import CRUDForm from "./CRUDForm";
import CRUDTable from "./CRUDTable";

const apiFalsa = [
  {
    id: 1,
    name: "jose",
    lastname: "rodrigues",
  },
  {
    id: 2,
    name: "laura",
    lastname: "espinal",
  },
  {
    id: 3,
    name: "pedro",
    lastname: "torres",
  },
  {
    id: 4,
    name: "juan",
    lastname: "barrientos",
  },
  {
    id: 5,
    name: "pepe",
    lastname: "collado",
  },
];

const CRUDApp = () => {
  const [db, setDb] = useState(apiFalsa);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
    console.log(data);
  };
  const updateData = (data) => {
    let newData = db.map((x) => (x.id === data.id ? data : x));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`are yoy sure to delete this user? ${id} `);

    if (isDelete) {
      let newData = db.filter((x) => x.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <CRUDForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CRUDTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};

export default CRUDApp;
