import express from "express"
const app = express()
const port = process.env.port || 4000;

// middleware
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
