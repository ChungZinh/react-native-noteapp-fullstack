import axios from "axios";
import {
  getStart,
  getError,
  getSuccess,
  updateError,
  updateStart,
  updateSuccess,
  createError,
  createStart,
  createSuccess,
  deleteError,
  deleteSuccess,
  deleteStart,
} from "./postSlice";

const URL = "http://localhost:5000";

export const getPost = async (dispacth) => {
  dispacth(getStart());
  try {
    const res = await axios.get(`${URL}/posts`);
    dispacth(getSuccess(res.data));
  } catch (error) {
    dispacth(getError());
  }
};

export const createPost = (post, dispacth) => {
  dispacth(createStart());
  try {
    axios.post(`${URL}/posts`, post).then((res) => {
      dispacth(createSuccess(res.data));
    });
  } catch (error) {
    dispacth(createError());
  }
};

export const updatePost = async (post, dispacth) => {
  dispacth(updateStart());
  try {
    const res = await axios.post(`${URL}/posts/update`,post);
    console.log(res.data)
    dispacth(updateSuccess(res.data));
  } catch (error) {
    dispacth(updateError());
  }
};

export const deletePost = (id, dispacth) => {
  dispacth(deleteStart());
  try {
    axios.delete(`${URL}/posts/delete/${id}`)
      .then(res => {
        dispacth(deleteSuccess(res.data));
      })
  } catch (error) {
    dispacth(deleteError())
  }
}