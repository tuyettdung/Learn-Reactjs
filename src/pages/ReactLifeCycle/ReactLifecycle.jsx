import React, { Component } from 'react'
import Child from './Child'

/**
      PureComponent: component ko có lifecycle
      ShouldComponentUpdate tuy nhiên ở PureComponent đã hỗ trợ việc xử lý render khi Props thay đổi và không render khi props ko thay đổi
      Lưu ý:
      So sánh props ở đây chỉ là dạng shallow conp-=are - nhận biết đc (primitive value): number,string, boolen, undefined.. Đối với reference value thì khi cập nhật state ở component cha phải sử dụng {...spread operator}.
 */


export default class ReactLifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            objectNumber: {
                number: 1
            },
            count: 60
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        // currentState.number = 22;
        // currentState.like = 99
        //return về state mới, nếu giữ state cũ thì return về null
        // return currentState;
        return null;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true
    }


    render() {
        console.log('render')
        return (
            <div className='container'>
                <h3>Number:{this.state.objectNumber.number} </h3>
                <button className='btn btn-success' onClick={() => {
                    let objectNumber = { ...this.state.objectNumber };
                    objectNumber.number += 1;
                    this.setState({
                        objectNumber: objectNumber
                    })
                }}>+</button>
                <h3>Like: {this.state.like}</h3>
                <button className='btn btn-success' onClick={() => {
                    this.setState({

                        like: this.state.like + 1
                    })
                }}>Like</button>
                <Child obNumber={this.state.objectNumber} />
                <br />
                {this.state.like <3 ? <h3>count: {this.state.count}</h3> : ''}
            </div>
        )
    }
timeout = {};
    componentDidMount() {
        console.log('componentDidMount');
        //Tương tự window.onload

        this.timeout = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
            console.log(this.state.count)

        }, 1000);

        
    }

    componentDidUpdate(prevProps, prevState) {
        //handle sau khi component gọi render
        //tuy nhiên hạn chế setState tại đây => setState phải có lệnh if
        console.log(prevProps);
        console.log(prevState)
    }
    componentWillUnmount(){
        //Trước khi component mất khỏi giao diện => clear tất cả script chạy ngầm
        clearInterval(this.timeout);
    }
}

/* 
     Lifecycle
     +Mounting:
       +Các hàm này sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhằm mục đích xử lí state và props.
       + Can thiệp thay đổi state trước render (sd getDerivedStateFormProps)
       + Can thiệp thay đổi state sau render sử dụng ComponentDidMount()
       + ComponentDidMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên (thường dùng để call api)
 */

