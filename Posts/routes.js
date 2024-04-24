import * as dao from "./dao.js";
export default function PostRoutes(app) {
  const createPost = async (req, res) => {
    const post = req.body;
    delete post._id;
    const result = await dao.createPost(post);
    res.json(result);
  };
  const deletePost = async (req, res) => {
    const status = await dao.deletePost(req.params.postId);
    res.json(status);
  };
  const findPostById = async (req, res) => {};
  const updatePost = async (req, res) => {
    const { postId } = req.params;
    const status = await dao.updatePost(postId, req.body);
    const currentCourse = await dao.findPostById(postId);
    res.json(status);
  };
  const findAllPosts = async (req, res) => {
    const { username } = req.query;
    const { city } = req.query;
    if (username) {
      const posts = await dao.findPostsByUsername(username);
      res.json(posts);
      return;
    }
    if (city) {
      const posts = await dao.findPostsByCity(city);
      res.json(posts);
      return;
    }
    const posts = await dao.findAllPosts();
    res.json(posts);
  };
  app.post("/api/posts", createPost);
  app.get("/api/posts", findAllPosts);
  app.get("/api/posts/:postId", findPostById);
  app.put("/api/posts/:postId", updatePost);
  app.delete("/api/posts/:postId", deletePost);
}
