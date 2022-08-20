import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class Child extends PureComponent {
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child')
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     //newPróp là props mới trc khi render
    //     //this.props: là props hiện tại
    //     if(this.props.number !== newProps.number){
    //         console.log('shouldComponentUpdate child')
    //         return true;
    //     }
    //     return false;
    // }
    render() {
        console.log('render child')
        return (
            <div className='container'>
                <div className='p-5 display-4 bg-dark text-white'>
                    <h2>Child component: {this.props.obNumber.number}</h2>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child');
      }

      componentDidUpdate (){
        
      }
}
