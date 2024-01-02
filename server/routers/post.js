import express from 'express'
import {PostController} from '../controllers/post.js';

const router = express.Router();


router.get('/', PostController.getPosts);

router.post('/', PostController.createPost);

router.post('/update', PostController.updatePost);

router.delete('/delete/:id', PostController.deletePost);

export default router;