const mongoose = require("mongoose");
const PostMessage = require("../model/postMessages");

const PostController = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); // get all the posts stored in database

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Creating New Posts

const CreatePost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Updating A Post

const Updatepost = async (req, res) => {
  const {id} = req.params;
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id"); // Checking if the id is the valid and there is data stored in the database with that id
  
  const updatedPost = await PostMessage.findByIdAndUpdate(id,{...post,id},{new:true})
  res.json(updatedPost)
};


// Deleting A Post

const Deletepost = async(req,res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id)

  res.status(204).send({"message" : `Project ${id} succesfully deleted !!!`})

}

// Liking a Post

const LikePost = async(req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send("No post with that id")

  const post = await PostMessage.findById(id)

 

  const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount : post.likeCount + 1},{new : true})

  console.log(updatedPost)

  res.json(updatedPost)
}

module.exports = { PostController, CreatePost ,Updatepost,Deletepost,LikePost};

