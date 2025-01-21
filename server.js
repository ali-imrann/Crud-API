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
 

app.get("/:todoId", async (req, res) => {
    const todoId = req.params.todoId
    try {
        const result = await Todo.findById(todoId)
        res.send ({
            success: true,
            message: "Todo Lists Retreived Successfully!",
            data: result
        })
    } catch (error) {
        res.send ({
            success: false,
            message: "Failed to Retreive Todo!",
            data: result
        })
    }
})

app.patch("/:id", async (req, res) => {
    const todoId = req.params.id; // Corrected the parameter name to `id`
    const updatedTodo = req.body; // Get the updated data from the request body
    try {
        const result = await Todo.findByIdAndUpdate(todoId, updatedTodo, {
            new: true, // Return the modified document rather than the original
        });

        // Check if result is found and updated
        if (result) {
            res.send({
                success: true,
                message: "Todo Updated Successfully!",
                data: result, // Return the updated todo data
            });
        } else {
            // If the todo is not found, return a 404 error
            res.status(404).send({
                success: false,
                message: "Todo Not Found!",
                data: null,
            });
        }
    } catch (error) {
        // Catch any errors and send an appropriate response
        res.status(500).send({
            success: false,
            message: "Todo Failed to Update!",
            error: error.message, // Provide the error message for debugging
        });
    }
});


app.delete("/delete/:todoId", async (req, res) => {
    try {
        const result = await Todo.findByIdAndDelete(req.params.todoId)
        res.send({
            success: true,
            message: "Todo Deleted Successfully!",
            data: null
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to Delete Todo!",
            data: null
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
