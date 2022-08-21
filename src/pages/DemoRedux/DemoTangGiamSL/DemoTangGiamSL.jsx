import React, { Component } from "react";

//Kết nối Redux
import { connect } from "react-redux";
class DemoTangGiamSL extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3>Demo tăng giảm số lượng</h3>
        <h3>Number: {this.props.number} </h3>
        <button
          className="btn btn-success"
          onClick={() => {
            //B1: Tạo ra object action
            const action = {
              type: "TANG_SL", //thuộc tính bắt buộc
              payload: 1,
            };
            //B2: dùng props.dispatch để đưa dữ liệu lên redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

//lấy state từ redux về và biến thành this.props của component
const mapStateToProps = (state) => {
  //return về object gì thì object đó sẽ là props của component
  return {
    number: state.number,
    state: state,
  };
};

//Tạo component chứa logic của redux
const ComponentRedux = connect(mapStateToProps)(DemoTangGiamSL);
export default ComponentRedux;

/*
   Function có 1 lệnh return về object thì viết tắt:
   (param) => {return {props1:'...}}
   (param) =>({})
   return sẽ được chuyển thành ()
   
 */
