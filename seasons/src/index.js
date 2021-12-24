import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // Khởi tạo state
  // Cách 1:
  // constructor(props) {
  //   super(props);
  //   this.state = { latitute: null, errorMessage: "" };
  // }

  // Cách 2:
  state = { latitute: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitute: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // Không nên viết câu điều kiện trong render() vì sẽ rất khó handle
  // Viết hàm ở ngoài rồi gọi vào sủ dụng
  renderContent() {
    if (this.state.errorMessage && !this.state.latitute) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitute) {
      return <SeasonDisplay latitute={this.state.latitute} />;
    }
    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
