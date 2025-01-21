# CRUD API in NodeJS using MongoDB

This is a RESTful API built with Node.js and MongoDB for managing a Todo application. The API provides a set of endpoints for performing CRUD (Create, Read, Update, Delete) operations on Todo items, making it ideal for managing tasks in a simple yet effective manner.

## Features

### CRUD Management
- **Create**: Add a new todo to the system.
- **Read**: View the details of a single todo or list all todos.
- **Update**: Edit details of an existing todo.
- **Delete**: Remove a todo from the system.

## Prerequisites

Before you start running the project, ensure you have the following installed:

- **Node.js** (v18+)
- **npm** or **yarn**
- **MongoDB**


## Run the API after cloning

For development mode, use the following command to start the API with live-reload enabled:

```bash
npm run dev
```

## Project Structure
```bash
CRUD-API/
├── database/                # Folder for database-related files
│   ├── db.js                # Database connection file
├── models/                  # Folder for defining MongoDB models
│   └── todo.model.js        # Model for the Todo item (defines schema)
├── package.json             # Project dependencies and scripts
└── server.js                # Main application entry point
```

### Endpoints

## Todo Management

```bash
POST /create-todo       # Create a new todo
GET /:id    # Get details of a specific todo
PATCH /todos/:id    # Update details of a specific todo
DELETE /todos/:id # Delete a specific todo
```

## License
This project is licensed under the MIT License.





