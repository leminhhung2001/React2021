import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { title, handleInput, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-group row'>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='inputPassword'
                placeholder='Add todo'
                value={title}
                onChange={handleInput}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
