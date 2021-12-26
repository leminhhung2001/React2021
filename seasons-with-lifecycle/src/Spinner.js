import React from "react";
const Spinner = (props) => {
  return (
    <div class='ui active dimmer'>
      <div class='ui big text loader'>{props.message}</div>
    </div>
  );
};

// Khởi tạo giá trị mặc định cho message
Spinner.defaultProps = {
  message: "Loading...",
};
export default Spinner;
