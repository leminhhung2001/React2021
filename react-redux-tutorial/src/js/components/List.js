import React from "react";
import { connect } from "react-redux";

const handleDelete = (id) => {
  console.log(id);
};

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const ConnectList = ({ articles }) => (
  <ul>
    {articles.map((item) => (
      <li key={item.id}>
        {item.title}
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectList);

export default List;
