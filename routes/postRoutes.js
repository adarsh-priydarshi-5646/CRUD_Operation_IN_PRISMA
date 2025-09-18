const express = require("express");
const {
    createPost, 
    getPost, 
    getPostById, 
    updatePostById, 
    deletePost
} = require('../controllers/postController.js');

const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);
router.get("/:id", getPostById);
router.put("/:id", updatePostById);
router.delete("/:id", deletePost);

module.exports = router;
