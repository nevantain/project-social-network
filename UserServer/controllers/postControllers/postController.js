const postDBController = require('./postBDController.js');
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

class postController {
    async newPost(req, res) {
        try {
            // AUTHORIZATION CHECK
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                // DATE GENERATION
                const dateNow = new Date();
                const date = `${dateNow.getDate()}.${dateNow.getMonth()}.${dateNow.getFullYear()}-${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
                // ID GENERATION
                const id = generateID();
                // CREATE NEW POST
                const createdPost = await postDBController.createPost(req, res, id, jwt_decode.id, date);

                return res.status(200).json((await createdPost).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async updatePost(req, res) {
        try {
            // AUTHORIZATION CHECK
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                // UPDATE POST
                const updatedPost = postDBController.updatePost(req, res);

                return res.status(200).json((await updatedPost).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async deletePost(req, res) {
        try {
            // AUTHORIZATION CHECK
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                // DELETE POST
                const deletedPost = postDBController.deletePost(req.body.id);

                return res.status(200).json((await deletedPost).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async getPosts(req, res) {
        try {
            // AUTHORIZATION CHECK
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                // GET ALL POSTS
                const posts = postDBController.getAllPosts(req, res);

                return res.status(200).json((await posts).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async getPost(req, res) {
        try {
            // AUTHORIZATION CHECK
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                // GET ONE POST
                const post = postDBController.getOnePost(req.body.id);

                return res.status(200).json((await post).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    async getPostsOfUser(req, res) {
        try {
            // AUTHORIZATION CHECK
            const jwt_decode = jwtVerify(req, res).data ? jwtVerify(req, res).data : null;
            if (jwt_decode) {
                // GET ALL POSTS OF USER
                const posts = postDBController.getUserPost(req.body.user_id);

                return res.status(200).json((await posts).rows);
            } else {
                return res.status(400).json({ message: 'USER NOT LOGINED' });
            }
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}

module.exports = new postController();