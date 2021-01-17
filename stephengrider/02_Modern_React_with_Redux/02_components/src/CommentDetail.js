import React from "react";

const CommentDetail = ({author, date, comment}) => {
  return (
    <div className ="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src='https://source.unsplash.com/random/600x600' />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
  )
}

export default CommentDetail;