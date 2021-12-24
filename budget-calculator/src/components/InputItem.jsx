import React from "react";
import { RiSendPlaneFill } from 'react-icons/ri';
const InputItem = (props) => {

  const {title, price, handleSubmit, handleChangeTitle, handleChangePrice, edited} = props
  return (
    <div className="input-item">
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col">
            <label>Charge</label>
            <input 
              type="text" 
              name="title" 
              class="custom-input" 
              placeholder="e.g. rent"
              value={title}
              onChange={handleChangeTitle} 
            />
          </div>
          <div class="col">
            <label>Amount</label>
            <input 
              type="text" 
              name="price" 
              class="custom-input" 
              placeholder="e.g. 100" 
              value={price}
              onChange={handleChangePrice}
            />
          </div>
        </div>
         {edited ? 
          <button style={{backgroundColor: 'green'}}>
            EDIT
            <RiSendPlaneFill className="send-spacing"/>
          </button>
          : 
          <button>
            SUBMIT
            <RiSendPlaneFill className="send-spacing"/>
          </button>
          } 
      </form>
    </div>
  );
};
export default InputItem;
