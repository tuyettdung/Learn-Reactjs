import React, { Component } from 'react'

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: '',
      name: '',
      price: '',
      productType: 'mobile',
      description: '',
      img: ''
    },
    error: {
      id: '',
      name: '',
      price: '',
      productType: '',
      description: '',
      img: ''
    }
  }

  handleChange = (event) => {
    let { value, id } = event.target;
    //xử lí productInfo

    const dataType = event.target.getAttribute("data-target")

    let newValue = this.state.productInfo;
    newValue[id] = value;


    //Xử lý error
    let newError = this.state.error;
    let messError = '';
    if (value.trim() === '') {
      messError = id + 'Không được bỏ trống !'
    } else if(dataType === 'number'){
      let regexNumber = /^\d+$/;
      if (!regexNumber.test(value)) {
        messError = id + ' phải là số !'
      }
    }
  
newError[id] = messError;

//setState
this.setState({
    productInfo: newValue,
    error: newError
  }, () => {
    console.log(this.state);
  });
}

handleSubmit = (event) => {
  //chặn sự kiện reload của browser
  event.preventDefault();
  // console.log(this.state);
  //khi ng dùng bấm submit => gửi dữ liệu ng dùng nhập vào từ state ra hàm addProduct
  this.props.addProduct(this.state.productInfo);
}

//Can thiệp vào quá trình render props của updating
static getDerivedStateFromProps(newProps,currentState){
  currentState.productInfo = newProps.productEdit;
  return currentState;

}

render() {
  let {id,name,price,img,productType,description} = this.state.productInfo;
  return (
    <form className='card' onSubmit={this.handleSubmit}>
      <div className='card-header bg-dark text-warning'>
        Create product
      </div>
      <div className='card-body row'>
        <div className='col-6'>
          <div className='form-group'>
            <p>id</p>
            <input value={id} type="text" className='form-control' id='id' name='id' onInput={this.handleChange} />
            <p className='text-danger'>{this.state.error.id}</p>
          </div>
          <div className='form-group'>
            <p>name</p>
            <input value={name} type="text" className='form-control' id='name' name='name' onInput={this.handleChange} />
            <p className='text-danger'>{this.state.error.name}</p>
          </div>
          <div className='form-group'>
            <p>price</p>
            <input value={price} data-type='number' type="text" className='form-control' id='price' name='price' onInput={this.handleChange} />
            <p className='text-danger'>{this.state.error.price}</p>
          </div>
        </div>
        <div className='col-6'>
          <div className='form-group'>
            <p>img</p>
            <input value={img} className='form-control' id='img' name='img' onInput={this.handleChange} />
            <p className='text-danger'>{this.state.error.img}</p>
          </div>
          <div className='form-group'>
            <p>product type</p>
            <select value={productType} name="productType" id="productType" className='form-control' onInput={this.handleChange}>
              <option value="mobie">mobile</option>
              <option value="tablet">tablet</option>
              <option value="laptop">laptop</option>
            </select>
          </div>
          <div className='form-group'>
            <p>description</p>
            <textarea value={description} name="description" id="description" className='form-control' onInput={this.handleChange}></textarea>
            <p className='text-danger'>{this.state.error.description}</p>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <button className='btn btn-success'>Create</button>
        <button type='button' className='btn btn-primary mx-2' onClick={()=>{
          this.props.updateProduct({...this.state.productInfo})
        }}>Update</button>
      </div>
    </form>
  )
}
}
