const prisma = require("../config/db.config.js");

const createPost = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    const newPost = await prisma.post.create({
      data: {
        title: title,
        description: description,
        userId: userId,
      },
    });

    return res.json(newPost);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getPost = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    if (page <= 0) {
      page = 1;
    }

    if (limit <= 0 || limit > 100) {
      limit = 10;
    }

    const skip = (page - 1) * limit;

    const posts = await prisma.post.findMany({
      skip: skip,
      take: limit,
    });
    const totalPost = await prisma.post.count()
    const totalPages = Math.ceil(totalPost / limit)

    return res.json({ status:200, posts, 
        meta:{
            totalPages,
            currentPage:page,
            limit,limit
        }
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    return res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        description: description,
      },
    });
    return res.json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  createPost,
  getPost,
  getPostById,
  updatePostById,
  deletePost,
};
