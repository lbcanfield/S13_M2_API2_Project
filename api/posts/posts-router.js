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
     const { title, contents } = req.body;
     if (!title || !contents) {
          res.status(400).json({
               message: "Please provide title and contents for the post"
          })
     }
     else {
          POSTS.insert({ title, contents })
               .then(({ id }) => {
                    return POSTS.findById(id)
               })
               .then(post => {
                    res.status(201).json(post)
               })
               .catch(err => {
                    res.status(500).json({
                         message: "There was an error while saving the post to the database"
                    })
               })
     }
});

router.put('/:id', (req, res) => {
     const { title, contents } = req.body;
     if (!title || !contents) {
          res.status(400).json({
               message: "Please provide title and contents for the post"
          })
     }
     else {
          POSTS.findById(req.params.id)
               .then(post => {
                    if (!post) {
                         res.status(404).json({
                              message: "The post with the specified ID does not exist"
                         })
                    }
                    else {
                         return POSTS.update(req.params.id, req.body)
                    }
               })
               .then(post => {
                    if (post) {
                         return POSTS.findById(req.params.id)
                    }
               })
               .then(post => {
                    res.status(201).json(post)
               })
               .catch(err => {
                    res.status(500).json({
                         message: "The post information could not be modified"
                    })
               })

     }
});

router.delete('/:id', async (req, res) => {
     try {
          const postLookUp = await POSTS.findById(req.params.id);
          if (!postLookUp) {
               res.status(404).json({
                    message: "The post with the specified ID does not exist"
               })
          }
          else {
               await POSTS.remove(req.params.id)
               res.json(postLookUp)
          }
     }
     catch (err) {
          res.status(500).json({
               message: "The post could not be removed"
          })
     }
});

router.get('/:id/comments', async (req, res) => {
     try {
          const postLookUp = await POSTS.findById(req.params.id);
          if (!postLookUp) {
               res.status(404).json({
                    message: "The post with the specified ID does not exist"
               })
          }
          else {
               const comments = await POSTS.findPostComments(req.params.id)
               res.json(comments)
          }
     }
     catch (err) {
          res.status(500).json({
               message: "The comments information could not be retrieved"
          })
     }
});





module.exports = router;