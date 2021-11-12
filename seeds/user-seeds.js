const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "Chase",
        email: "chase@chase.com",
        password: "password1234"
    },
    {
        id: 2,
        username: "Cat",
        email: "cat@cat.com",
        password: "password1234"
    },
    {
        id: 3,
        username: "James",
        email: "james@james.com",
        password: "password1234"
    },
    {
        id: 4,
        username: "Adam",
        email: "adam@adam.com",
        password: "password1234"
    },
    {
        id: 5,
        username: "Manuel",
        email: "manuel@manuel.com",
        password: "password1234"
    },
];

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;