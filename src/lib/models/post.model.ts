import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
