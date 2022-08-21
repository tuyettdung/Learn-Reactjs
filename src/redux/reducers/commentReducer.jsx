const stateDefault = {
  commentInfo: {
    name: "",
    content: "",
  },
  arrComment: [
    { name: "nguyên a", content: "like like" },
    { name: "nguyên b", content: "like like" },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      //b1: lấy ra dữ liệu action gửi lên
      const { id, value } = action.payload;
      //b2: Đối với state là object hoặc array => clone state ra
      let commentInfoUpdate = { ...state.commentInfo };

      //b3: Thay đổi state
      commentInfoUpdate[id] = value;
      //b4: Gán state cũ = state update
      state.commentInfo = commentInfoUpdate;

      return { ...state }; //immutable
    }
    case "HANDLE_SUBMIT": {
      //b1: lấy ra dữ liệu action gửi lên
      let comment = action.payload;
      //b2: đối với state là object => clone ra
      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.push(comment);
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }
    case "DELETE_COMMENT": {
      //b1: lấy ra dữ liệu action gửi lên
      let index = action.payload;
      //b2: clone state.arrComment
      let arrCommentUpdate = [...state.arrComment];
      arrCommentUpdate.splice(index, 1);
      //b3: cập nhật state
      state.arrComment = arrCommentUpdate;
      return { ...state };
    }
    case "EDIT_COMMENT": {
        //b1: lấy ra dữ liệu action gửi lên
        let index = action.payload;
        //b2: clone state.commentInfo
        let commentInfoUpdate = {...state.commentInfo};
        commentInfoUpdate = state.arrComment[index];
        //cập nhật lại state
        state.commentInfo = commentInfoUpdate;
        return {...state}

      }
    case "UPDATE_COMMENT":{
        //clone state.arrComment
        let arrCommentUpdate = [...state.arrComment];
        //Tìm comment có name và nội dung
        let cmt = arrCommentUpdate.find(comment => comment.name === state.commentInfo.name);
        if(cmt){
            cmt.content = state.commentInfo.content;
        }
        //cập nhật state
        state.arrComment = arrCommentUpdate;
        return {...state}
    }

    default:
      return state;
  }
};
