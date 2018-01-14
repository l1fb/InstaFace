const firebaseDatabase = require('../../firebaseDb');


const UserController = {
    createUser: (req, res) => {
        let name = req.body.name.split(' '); 
        let first_name = name[0];
        let last_name = name[name.length-1];
        let user_ID = req.body.user_ID;
        console.log("route is working correctly", req.body);
        firebaseDatabase.createUser(first_name, last_name, user_ID);
        res.status(201).send(req.body);
    }
}


module.exports = UserController; 