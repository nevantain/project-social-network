const db = require('../../db/db.js');

class postDBController {
    async createPost(req, res, id, userId, date) {
        try {
            const { title, content } = req.body;
            await db.query('INSERT INTO post (id, title, content, user_id, date) VALUES ($1, $2, $3, $4, $5);', [id, title, content, userId, date]);
            const createdPost = this.getOnePost(id);
            return createdPost;
        } catch (e) {
            return e;
        }
    }

    async getAllPosts() {
        try {
            const posts = await db.query('SELECT * FROM post;');
            return posts;
        } catch (e) {
            return e;
        }
    }

    async getOnePost(id) {
        try {
            const post = await db.query('SELECT * FROM post WHERE id=$1;', [id]);
            return post;
        } catch (e) {
            return e;
        }
    }

    async getUserPost(userId) {
        try {
            const post = await db.query('SELECT * FROM post WHERE user_id=$1;', [userId]);
            return post;
        } catch (e) {
            return e;
        }
    }

    async updatePost(req, res) {
        try {
            let { id, title, content } = req.body;
            const post = await db.query('UPDATE post set title=$1, content=$2 WHERE id=$3 RETURNING *;', [title, content, id]);
            return post;
        } catch (e) {
            return e;
        }
    }

    async deletePost(id) {
        try {
            const post = await db.query('DELETE FROM post WHERE id=$1;', [id]);
            return post;
        } catch (e) {
            return e;
        }
    }
}

module.exports = new postDBController();