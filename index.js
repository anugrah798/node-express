const express = require('express');
const app = express();
const PORT = 3000;

let users = [{
    id: 1,
    "Name": "John Doe",
    "Age": 25
},
{
    id: 2,
    "Name": "James Smith",
    "Age": 30
}]

app.get('/', (req, res) => {
    res.send('Hello world');
});

//get all users
app.get('/users', (req, res) => {
    res.json(users)
});
app.get('/users/:id', (req, res) => {
    const user_id = Number(req.params.id);
    const user = users.find((user) => user.id === user_id);
    if (!user) {
        return res.json({
            message: 'User Not Found'
        })
    }
    res.json(user)



})


app.listen(PORT, () => {
    console.log('server Running ')
});