import React from 'react';
import image from '../Images/Profile.jpeg';
import './AddPost.css'
function AddPost() {
  return (
    <div className='container'>
      <div className="post-header">
        <img src={image} alt="Profile" className="profile-pic" />
        <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-default navbar-btn">
          <span>What's on your mind?</span>
        </button>
      </div>
      <div className='modal-container'>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Post</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="post-body">
                <img src={image} alt="Profile" className="profile-pic" />
                <textarea className="post-textarea" placeholder="What's on your mind?"></textarea>
              </div>
              <div className="post-footer">
                <input type="file" className="file-input" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-primary" data-dismiss="modal">Post</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
