import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@mail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Branko Brankovich",
        email: "brane@mail.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Ivo Ivic",
        email: "ive@mail.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
