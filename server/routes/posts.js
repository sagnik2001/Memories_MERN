const express = require('express')
const { PostController, CreatePost, Updatepost, Deletepost, LikePost } = require('../controller/postcontroller')

const router = express.Router()


router.get('/',PostController)
router.post('/',CreatePost)
router.patch('/:id',Updatepost)
router.delete('/:id',Deletepost)
router.patch('/:id/likes/',LikePost)

module.exports = router