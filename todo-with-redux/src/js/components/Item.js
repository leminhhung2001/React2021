import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteItem, editItem } from "../actions/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
    editItem: (id, title) => dispatch(editItem(id, title)),
  };
};

const Item = (props) => {
  const { item } = props;
  const [show, setShow] = useState(false);

  const showItem = {};
  const showEditItem = {};

  const handleShow = () => {
    setShow(!show);
  };

  if (show) {
    showItem.display = "none";
  } else showEditItem.display = "none";

  return (
    <li>
      <div style={showItem} className="item">
        {item.title}
        <button onClick={() => props.deleteItem(item.id)}>Delete</button>
        <button onClick={handleShow}>Edit</button>
      </div>
      <input
        className="item"
        style={showEditItem}
        value={item.title}
        onChange={(e) => props.editItem(item.id, e.target.value)}
      />
    </li>
  );
};

const ConnectToDelete = connect(null, mapDispatchToProps)(Item);

export default ConnectToDelete;
