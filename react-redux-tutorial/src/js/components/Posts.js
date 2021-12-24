import { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.articles.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 15),
  };
}

export default connect(mapStateToProps, { getData })(Post);
