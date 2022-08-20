import React, { Component } from 'react'
import DemoXemChiTiet from '../DemoXemChiTiet/DemoXemChiTiet';
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {
    renderProductItem = () => {
        let { products,viewDetail } = this.props;
        return products.map((car, index) => {
            return <div className='col-3' key={index}>
                <ItemProduct viewDetail={viewDetail} item={car} />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <div className='row'>
                    {this.renderProductItem()}
                </div>
            </div>
        )
    }
}
