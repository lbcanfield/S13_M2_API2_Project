// implement your posts router here
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
     // finish this to get all posts in the database
});

router.get('/:id', (req, res) => {
     // finish this to get specific post by id
});

router.post('/', (req, res) => {
     // finish this to add a new post to the database
});

router.put('/:id', (req, res) => {
     // finish this to update a post in the database
});

router.delete('/:id', (req, res) => {
     // finish this to delete a post by id
});

router.get('/:id/comments', (req, res) => {
     // finish this to get comments from a specific post
});





module.exports = router;