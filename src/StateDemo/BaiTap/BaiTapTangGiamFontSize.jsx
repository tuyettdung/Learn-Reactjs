import React, { Component } from 'react'

export default class BaiTapTangGiamFontSize extends Component {
    state ={
        fSize:16
    }
  render() {
    return (
      <div className='container'>
        <h3>Bài tập tăng giảm fontSize</h3>
        <p style={{fontSize: this.state.fSize + 'px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque quaerat, rem in deleniti beatae, earum ad magni ipsam rerum placeat nobis iure! Veniam eos nam iste ab, omnis et.</p>
        <button className='btn btn-primary mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize + 5
            })
        }}>+</button>
        <button className='btn btn-primary mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize - 5
            })
        }}>-</button>
      </div>
    )
  }
}
