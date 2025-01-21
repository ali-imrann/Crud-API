import express from "express"
import dotenv from "dotenv"
import connectToDB from "./database/db.js"
import { Todo } from "./models/todo.model.js";


dotenv.config();
const app = express()
const port = process.env.port || 4000;

// middleware
app.use(express.json())

connectToDB();

// Todo APIs
app.get("/todos", async (req, res) => {
    try {
        const result = await Todo.find()
        res.send({
            success: true,
            message: "Todo Lists Retreived Successfully!",
            data: result
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to Retreive Todo Lists!",
            data: result
        })
    }
})

app.post("/create-todo", async (req, res) => {
    const todoDetails = req.body
    try {
        const result = await Todo.create(todoDetails)
        res.send({
            success: true,
            message: "Todo is crated Successfully!",
            data: result
        })    
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "Failed to create Todo!",
            data: result
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
