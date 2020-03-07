const express = require('express');
const appRoot = require('app-root-path');
const data = require(appRoot + '/data/data');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('index', {projects: data});
});

router.get('/about',(req, res) => {
    res.render('about');
});

router.get('/project/:id',(req, res, next) => {
    const id = +req.params.id;
    const project = data.find(project => project.id === id);

    project ? res.render('project', project) : next();
});

module.exports = router;