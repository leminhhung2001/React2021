import React, { useState } from "react";
import { addNewItem } from "../actions/actions";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (item) => dispatch(addNewItem(item)),
  };
};

export const FormInput = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewItem({ title, id: uuidv4() });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

const Form = connect(null, mapDispatchToProps)(FormInput);

export default Form;
