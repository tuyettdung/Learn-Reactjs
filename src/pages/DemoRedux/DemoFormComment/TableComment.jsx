import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
  render() {
    const { arrComment } = this.props;

    return (
      <div>
        <div className="img">
          <img src="https://i.pravatar.cc?u=20" alt="..." height={200} />
        </div>
        {arrComment.map((comment, index) => {
          return (
            <div className="row mt-2 align-items-center" key={index}>
              <div className="col-2">
                <img src= {`https://i.pravatar.cc?u=${comment.name}`} width={50} />
              </div>
              <div className="col-8 bg-secondary rounded" style={{background:'rgba(0,0,0,0.1)',padding:15}}>
                <h3>{comment.name}</h3>
                <p>{comment.content}</p>
                <div className="text-right">
                  <button className="btn btn-danger" onClick={()=>{
                    //Tạo ra action xóa
                    const action = {
                      type:'DELETE_COMMENT',
                      payload: index
                    }
                    this.props.dispatch(action)

                  }}>Xóa</button>
                  <button className="btn btn-primary mx-2" onClick={()=>{
                    //Tạo ra action xóa
                    const action = {
                      type:'EDIT_COMMENT',
                      payload: index
                    }
                    this.props.dispatch(action)

                  }}>Sửa</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducer.arrComment,
});

export default connect(mapStateToProps)(TableComment);
