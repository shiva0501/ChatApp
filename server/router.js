import express from 'express';
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send(`server is up and running`);
});

export default Router;