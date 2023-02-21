import React from "react";
import image8 from '../Assets/admin2.jpg';
function InputPost() {
  return (
    <div className="Display">
      <div className="central-meta">
        <div className="new-postbox">
          <figure>
            <img src={image8} alt="" />
          </figure>
          <div className="newpst-input">
            <form method="post">
              <textarea rows="2" placeholder="write something"></textarea>
              <div className="attachments">
                <ul>
                  <li>
                    <i className="fa fa-music"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-image"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-video"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-camera"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <button type="submit">Post</button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputPost;