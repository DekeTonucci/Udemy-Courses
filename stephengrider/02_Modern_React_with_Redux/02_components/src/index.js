import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Hot reload index.js of CRA:
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" date="Today at 6:00pm" comment="Great post!"/>
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you wish to delete this file?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" date="Today at 2:00am" comment="Nice!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" date="Yesterday at 5:00pm" comment="Meh"/>
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
