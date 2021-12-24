import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const mapStateToProps = (state) => {
  return { items: state.items };
};

const ConnectedList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
