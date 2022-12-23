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

router.get('/:id', async (req, res) => {
     try {
          const post = await POSTS.findById(req.params.id);
          if (!post) {
               res.status(404).json({   //404 - not found
                    message: "The post with the specified ID does not exist"
               })
          }
          else {
               res.status(200).json(post);
          }
     }
     catch (error) {
          res.status(500).json({
               message: "The post information could not be retrieved"
          })
     }
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