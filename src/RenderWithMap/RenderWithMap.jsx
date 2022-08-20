import React, { Component } from 'react'

const data = [
    { id: 1, name: 'Red car', price: 1000, img: './img/products/red-car.jpg' },
    { id: 2, name: 'Black car', price: 1000, img: './img/products/black-car.jpg' },
    { id: 3, name: 'Silver car', price: 1000, img: './img/products/silver-car.jpg' },
    { id: 4, name: 'Steel car', price: 1000, img: './img/products/steel-car.jpg' },
]

export default class RenderWithMap extends Component {
    renderProduct = () => {
        //output: [<tr></tr>,<tr></tr>...]
        //{{},{}..} => [<tr></tr>,<tr></tr>]
        // const arrTrJSX = [];
        // for (let index = 0; index < data.length; index++) {
        //     //mỗi lần duyệt lấy ra 1 object
        //     let prod = data[index];
        //     let tr = <tr>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td>{prod.price}</td>
        //         <td><img src={prod.img} width={50} alt="..." /></td>
        //     </tr>;
        //     //đưa vào mảng arrTrJSX:
        //     arrTrJSX.push(tr);
        // }
        // return arrTrJSX;
        //Ccách 2: dùng map
        return data.map((prod, index) => {
            return <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={prod.img} width={50} alt="..." /></td>
            </tr>
        })
    }
    render() {
        return (
            <div className='container'>
                <h3>Render Table Product</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()};
                    </tbody>
                </table>
            </div>
        )
    }
}
