const express = require("express");
const {
    createUser, 
    getUser, 
    getUserById,
    updateUserbyId, 
    deleteUser
} = require('../controllers/userController.js');

const router = express.Router();

router.post("/", createUser);
router.get("/", getUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserbyId);
router.delete("/:id", deleteUser);


module.exports = router
