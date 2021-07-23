import React, { useState, useEffect } from "react";

const initialform = {
  name: "",
  lastname: "",
  id: null,
};

const CRUDForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialform);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialform);
    }
  }, [dataToEdit]);

  const handleChange = (x) => {
    setForm({
      ...form,
      [x.target.name]: x.target.value,
    });
  };

  const handleSubmit = (x) => {
    x.preventDefault();

    if (!form.name || !form.lastname) {
      alert("no data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (x) => {
    setForm(initialform);
    setDataToEdit(null);
  };

  return (
    <div className="mt-5">
      <h3 className="m-3"> {dataToEdit ? "edit" : "add"} </h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
            className="m-1 form-control"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            onChange={handleChange}
            value={form.lastname}
            className="m-1 form-control"
          />
        </div>
        <input type="submit" value="send" className="m-1 btn btn-primary" />
        <input
          type="reset"
          value="clean up"
          className="m-1 btn btn-warning "
          onChange={handleReset}
        />
      </form>
    </div>
  );
};

export default CRUDForm;
