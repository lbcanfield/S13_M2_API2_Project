// implement your posts router here
const express = require('express');
const POSTS = require('./posts-model');

const router = express.Router();


router.get('/', (req, res) => {
     POSTS.find()
          .then(post => {
               res.status(200).json(post)
          })
          .catch(err => {
               res.status(500).json({
                    message: "The posts information could not be retrieved"
               })
          });
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