import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {product,xemChiTiet} = this.props;
    
    return (
        <div className='card'>
                    <img src={product.hinhAnh} alt="" height={350} />
                    <div className='card-body'>
                        <h3>{product.tenSP}</h3>
                        <p>{product.giaBan}</p>
                        <button className='btn btn-success' onClick={()=>{
                            xemChiTiet(product);
                        }}>Xem chi tiết</button>
                    </div>
                </div>
    )
  }
}
