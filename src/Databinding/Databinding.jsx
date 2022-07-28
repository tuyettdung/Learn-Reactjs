//rcc
import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://picsum.photos/id/2/200/200'
    }

    renderCardProduct = () => {
        return (<div className='card'>
            <img src={this.product.img} alt="" />
            <div className='card-body bg-dark text-white'>
                <p>{this.product.name}</p>
                <p>{this.product.price}</p>
            </div>
        </div>)
    }

    render() {
        const title = 'Cybersoft';
        const person = {
            name: 'mr.đàm',
            age: 25
        }

        const renderText = (tenLop) => {
            return `hello ${tenLop}`;
        }


        return (
            <div className='container'>
                <p id='pText'>{title}</p>
                <hr />
                <div className='card w-25 mt-2'>
                    <img src="https://i.pravatar.cc?u=1" alt="" />
                    <div className='card-body'>
                        <p>Name {person.name}</p>
                        <p>Age {person.age}</p>
                    </div>
                </div>
                <hr />
                <h3>binding gọi hàm</h3>
                {renderText('bootcamp28')};
                <hr />
                <div className='alert alert-primary'>
                    Product info:
                    <p>id: {this.product.id}</p>
                    <p>id: {this.product.name}</p>
                    <img src={this.product.img} alt="" width={200} />
                    <p>Price: {this.product.price}</p>
                </div>
                <hr />
                <h3>Card product</h3>
                <div className='w-25'>
                    {this.renderCardProduct()}
                </div>
            </div>
        )
    }
}
