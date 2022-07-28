//rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        alert('Hello world!!!');
    }

    showMess = (name) => {
        alert(`Hello ${name}`);
    }


    render() {
        return (
            <div className='container'>
                <button id='btnClick' onClick={(e) => {
                    alert('hello cybersoft');
                }}>Click me</button>

                <button className='btn btn-primary ml-2' onClick={this.handleClick}>CLICK</button>
                <hr />
                <h3>Handle click params</h3>
                <button onClick={(e) => {
                    //gọi các hàm khác thực thi khi click
                    this.showMess('Dung!!!!');
                }}>Show mess</button>

                <button className='btn btn-primary ml-2' onClick={this.showMess.bind(this, 'mentor!!!')}>CLICK</button>

            </div>
        )
    }
}
