import React, { Component } from 'react'

export default class  extends Component {
  render() {
    const {item}=this.props;
    return (
      <div className='card'>
        <img src={`https://i.pravatar.cc?u=${item?.age}`}alt="" />
        <div className='card-body'>
            <p>Name: {item?.name}</p>
            <p>Age: {item?.age}</p>
            <p>Id: {this.props.item.id}</p>
        </div>
      </div>
    )
  }
}
