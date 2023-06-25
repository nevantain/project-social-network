const db = require('../../db/db.js');

class userDBController {
    async getAllUsers(req, res) {
        try {
            const users = await db.query('SELECT * FROM person');
            return users;
        } catch (e) {
            return e;
        }
    }

    async getOneUser(username) {
        try {
            const user = await db.query('SELECT * FROM person WHERE username=$1', [username]);
            return user;
        } catch (e) {
            return e;
        }
    }

    async updateUser(req, res) {
        try {
            let { id, username, password } = req.body;
            password = config.crypto.SHA256(password).toString();
            const user = await db.query('UPDATE person set username=$1, password=$2 WHERE id=$3 RETURNING *', [username, password, id]);
            return user;
        } catch (e) {
            return e;
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await db.query('DELETE FROM person WHERE id=$1', [req.body.id]);
            return user;
        } catch (e) {
            return e;
        }
    }
}

module.exports = new userDBController();