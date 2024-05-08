const express = require('express');
require('./Confi'); // Assuming this file contains the MongoDB connection configuration
const userdata = require('./user'); // Assuming your user schema is exported as 'User'
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
app.use(bodyParser.json());

app.use(cors());
app.listen(5000, () => {
    console.log("Server started");
});

app.post('/data', async (req, res) => {
    try {
        // Create a new user instance using the data from the request body
        const newUser = new userdata({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            dob: req.body.dob,
            gender: req.body.gender
        });
        // Save the new user to the database
        await newUser.save();
        res.send("User created successfully");
        console.log("User created:", newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal server error");
    }
});

app.get('/getdata', async (req, res) => {
    try {
        // Query MongoDB to find all users
        const users = await userdata.find();
        // Send the retrieved users as a response
        res.json(users);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal server error");
    }
});

