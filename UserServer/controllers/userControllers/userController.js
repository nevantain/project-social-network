const userDBController = require('./userDBController.js');
const jwtDecode = require('jwt-decode');
const jwt = require('jsonwebtoken');

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY4NjkxMDA2NH0.lZmt5NTGYY1aGn20_q9CyZKBwMJl74vHAwSh20DcgFg

const generateID = () => {
    const rand = Math.floor((Math.random()*1000000000))
    let id = rand % 2 === 0 ? rand / 2 * 3 : (rand + 1) / 2 * 3;
    return +id;
}

const jwtVerify = (req, res) => {
    return req.header('jwt') ? { data: jwtDecode(req.header('jwt')), message: 'ok' } : { message: 'not jwt' }
}

class userController {
    async updateUser(req, res) {
        try {
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                const updatedUser = userDBController.updateUser(req, res);
                console.log(updatedUser);
                return res.status(200).json((await updatedUser).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async deleteUser(req, res) {
        try {
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                console.log((await userDBController.getOneUser(req.body.id)).rows);
                const deletedUser = userDBController.deleteUser(req.body.id);
                console.log((await deletedUser).rows);
                return res.status(200).json((await deletedUser).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async getUsers(req, res) {
        try {
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                console.log(jwt_decode);
                const users = userDBController.getAllUsers(req, res);
                return res.status(200).json((await users).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async getUser(req, res) {
        try {
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                const user = userDBController.getOneUser(req.body.id);
                return res.status(200).json((await user).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}

module.exports = new userController();