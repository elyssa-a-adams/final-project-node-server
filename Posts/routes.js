import * as dao from "./dao.js";
import multer from "multer";
export default function PostRoutes(app) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
  });
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
    const posts = await dao.findAllPosts();
    res.json(posts);
  };
  app.post("/api/posts", createPost);
  app.post("/api/posts/upload", upload.single("image"), (req, res) => {
    res.send(req.file.path);
  });
  app.get("/api/posts", findAllPosts);
  app.get("/api/posts/:postId", findPostById);
  app.put("/api/posts/:postId", updatePost);
  app.delete("/api/posts/:postId", deletePost);
}
