const config = require('../config.js');
const jwt = require('jsonwebtoken');
const userDBController = require('./userDBController.js');
const validController = require('./validController.js');

const generateAccessToken  = (id, username) => {
    return jwt.sign({ id, username }, config.secret);
}

class userController {
    async sign(req, res) {
        try {
            let { username, password } = req.body;
            // VALIDATION
            if (validController.validData(username, password) === false) {
                return res.status(400).json('not valid data');
            }
            // EXAM DATA
            const candidate = (await userDBController.getOneUser(username)).rows[0];
            if (candidate) {
                return res.status(400).json({ message: 'user already exits' });
            }
            // CREATE USER
            const dateNow = new Date();
            const date = `${dateNow.getDate()}.${dateNow.getMonth()}.${dateNow.getFullYear()}-${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
            await userDBController.createUser(username, password, date);
            const userPayload = (await userDBController.getOneUser(username)).rows[0];
            const token = generateAccessToken(userPayload.id, userPayload.username);
            return res.status(200).json({ token: token, user: (await userDBController.getOneUser(username)).rows[0] });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ 'user not created': e });
        }
    }

    async login(req, res) {
        try {
            let { username, password } = req.body;
            const candidate = (await userDBController.getOneUser(username)).rows[0];
            validController.syncPasswords(password, candidate.password);
            if (!candidate) {
                return res.json(400, { message: 'user not found' });
            }
            const token = generateAccessToken(candidate.id, candidate.username);
            return res.status(200).json({token: token, user: (await userDBController.getOneUser(username)).rows[0] });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ 'user not logined': e });
        }
    }

    async getAll(req, res) {
        try {
            return res.status(200).json((await userDBController.getUsers(req, res)).rows);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

}

module.exports = new userController();