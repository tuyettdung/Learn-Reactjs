//rcc
import React, { Component } from 'react'

import style from './StyleWithJSX.module.scss';

export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className='container'>
        <h3>StyleWithJSX</h3>
        <p className='text-red'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe at minus eaque reiciendis dicta similique praesentium harum, ipsum fuga quis!
        </p>
        <h3 className={`p-2 bg-dark text-light ${style['text-blue']}`}>Hello frontend 28</h3>
        <hr />
        <p style={{color:'brown',background:`url(https://picsum.photos/600/600)`,height:500}}>Hello WORLD!</p>
      </div>
    )
  }
}
