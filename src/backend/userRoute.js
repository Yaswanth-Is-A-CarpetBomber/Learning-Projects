import { Router } from "express";
import User from "./User.js";

const route = Router();

route.get('/', async (req, res) => {
    try {
        const user = await User.find({});
        res.json(user);
    }
    catch(err){
        console.log(err);
    }
});

route.post('/', async (req, res) => {
    try {
        console.log("The req body is", req.body);
        const user = req.body;
        await User.create(user);
        console.log("The user has been added.")
        res.status(201).json(user);
    }
    catch(err){
        console.log(err);
    }
});

route.get('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const user = await User.find({id});
        res.status(201).json(user);
    }
    catch(err){
        console.log(err);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await User.findByIdAndDelete(id); // or findByIdAndRemove

        if (!deleted) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
})

export default route;