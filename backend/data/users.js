import bcrypt from "bcryptjs";

const users = [
    {
        name: "Kurt Cobain",
        email: "kurtcobain@mail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Steve Vai",
        email: "stevevai@mail.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Joe Satriani",
        email: "joesatriani@mail.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Joey Ramone",
        email: "joeyramone@mail.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
