const firebaseDatabase = require('../../firebaseDb');


const UserController = {
    createUser: (req, res) => {
        let username = req.body.username;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let user_ID = req.body.user_ID;
        console.log("route is working correctly", req.body);
        firebaseDatabase.createUser(username, first_name, last_name, user_ID);
        res.send(req.body);
    }
}


module.exports = UserController; 