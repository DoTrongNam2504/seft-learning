import http from "../http-common";

class PostService {
  getAllPosts() {
    return http.get("/posts");
  }
  getPostById(id) {
    return http.get(`/posts/${id}`);
  }
  createPost(post) {
    return http.post("/posts", post);
  }
  updatePost(id, post) {
    return http.put(`/posts/${id}`, post);
  }
  deletePost(id) {
    return http.delete(`/posts/${id}`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new PostService();
