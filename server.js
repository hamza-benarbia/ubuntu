const express = require('express');
const bodyPArsser = require('body-parser');


const app = express();
app.use(express.json());

const tasks = [
    {
        id: 1,
        name: "task 1",
        completed: false
    },
    {
        id: 2,
        name: "task 2",
        completed: false
    },
    {
        id: 3,
        name: "task 3",
        completed: false
    }
];



app.post("/api/tasks", (request, response) => {
    const { error } = validateTask(request.body); 
    if (error) return response.status(400).send(error.details[0].message);

    const task = {
        id: tasks.length + 1,
        name: request.body.name,
        completed: request.body.completed || false
    };

    tasks.push(task);
    response.status(201).send(task);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
