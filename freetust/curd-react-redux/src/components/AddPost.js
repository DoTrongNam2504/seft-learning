import React from "react";
import { connect } from "react-redux";
import "../assets/css/AddPost.css";
import uuid4 from "uuid4";
import { createPost } from "../actions/posts";
class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onActive = this.onActive.bind(this)
    this.addNewPost = this.addNewPost.bind(this);

    this.state = {
      postId: uuid4(),
      title: "",
      description: "",
      image: "",
      status: false,
    };
  }

  addNewPost() {
    const { title, description, image, status } = this.state;
    this.props
      .createPost(title, description, image, status)
      .then((data) => {
        this.setState({
          postId: data.postId,
          title: title,
          description: description,
          image: image,
          status: status,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  onActive(event){
    console.log(event.target.checked, event.target.id);
  }

  render() {
    return (
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-12">
            <div className="card mb-4">
              <div className="card-header">Post Information</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1">Post title:</label>
                    <input
                      className="form-control"
                      name="title"
                      required
                      onChange={this.onChangeTitle}
                      type="text"
                      placeholder="Enter your post title...."
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Post image:</label>
                      <input
                        className="form-control"
                        required
                        name="imageUrl"
                        type="file"
                        onChange={this.onImageChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1">Post status:</label>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="groupSales"
                          type="checkbox"
                          name="status"
                          onChange={this.onActive}
                          defaultChecked={false}
                        />
                        <label className="form-check-label">{"Active"}</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1">Description: </label>
                    <textarea
                      name="description"
                      rows={5}
                      className="form-control"
                      onChange={this.onChangeDescription}
                    ></textarea>
                  </div>

                  <button onClick={this.addNewPost} className="btn btn-primary" type="button">Save changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createPost })(AddPost);
