const prisma = require("../config/db.config.js");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: { 
        name:name, 
        email:email 
    },
    });

    return res.json(user);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { 
        id: Number(id) 
    }
    });
    return res.json(user);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const updateUserbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await prisma.user.update({
      where: { 
        id: Number(id) 
    },
      data: { 
        name:name, 
        email :email
    },
    });

    return res.json(updatedUser);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.user.delete({ 
        where: { 
            id: Number(id) 
        } 
    });
    return res.json({ message: "User deleted successfully" });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUserbyId,
  deleteUser
};
