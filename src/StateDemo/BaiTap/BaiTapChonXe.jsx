import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state ={
        srcImg: './img/products/red-car.jpg'// xác định default state
    }

  render() {
    return (
      <div className='container mt-2'>
        <div className='row'>
            <div className='col-6'>
                <img src={this.state.srcImg} className='w-100' alt="" />
            </div>
            <div className='col-6'>
                <button className='btn text-white mx-2' style={{background:'red'}} onClick = {() => {
                    this.setState({
                        srcImg: './img/products/red-car.jpg'
                    })
                }} >Red</button>
                <button className='btn text-white mx-2' style={{background:'black'}} onClick = {()=>{
                    this.setState({
                        srcImg: './img/products/black-car.jpg'
                    })
                }}>Black</button>
                <button className='btn text-black mx-2' style={{background:'sliver'}} onClick={()=>{
                    this.setState({
                        srcImg: './img/products/silver-car.jpg'
                    })
                }}>Sliver</button>
                <button className='btn text-black mx-2' style={{background:'#EEE'}} onClick={()=>{
                    this.setState({
                        srcImg: './img/products/steel-car.jpg'
                    })
                }}>Steel</button>
            </div>
        </div>

      </div>
    )
  }
}
