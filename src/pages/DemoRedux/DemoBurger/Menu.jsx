import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenu = () => {
    const {burger} = this.props;
    return burger.map((item,index)=>{
      return <tr key={index}>
      <td>{item.id}</td>
      <td>
        <button className="mx-2 btn btn-primary" onClick={()=>{
          const action = {
            type:'CHANGE_TOPPING',
            payload: {
              id: item.id,
              quantity: 1
            },
          };
            //Gửi dữ liệu lên redux
            this.props.dispatch(action);
        }}>+</button>
        {item.quantity}
        <button className="mx-2 btn btn-primary" onClick={()=>{
          const action = {
            type: 'CHANGE_TOPPING',
            payload: {
              id: item.id,
              quantity: -1
            },
          };
          this.props.dispatch(action);
        }}>-</button>
      </td>
      <td>{item.price}</td>
    </tr>
    })
  }
  render() {
    const {burger} = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <th>Topping</th>
            <th>quantity</th>
            <th>price</th>
          </thead>
          <tbody>
            {this.renderMenu()}
            <tr>
              <td></td>
              <td></td>
              <td>Total: {burger.reduce((cur, item) => cur += item.price*item.quantity, 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger
});

export default connect(mapStateToProps)(Menu);
