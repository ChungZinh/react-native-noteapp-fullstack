import { PostModel } from "../models/post.js";

export const PostController = {
  getPosts: async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createPost: async (req, res) => {
    try {
      const post = req.body;
      const newPost = new PostModel(post);
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      const updatePost = req.body;
      const post = await PostModel.findOneAndUpdate(
        { _id: updatePost._id },
        updatePost,
        { new: true }
      );
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deletePost:  async (req, res) => {
    try {
      const id = req.params.id;
      const result = await PostModel.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
