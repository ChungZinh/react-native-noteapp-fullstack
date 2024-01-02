import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: 'Title'
        },
        desc: {
            type: String,
            default: 'Description'
        },
    },
    {timestamps: true}
)


export const PostModel = mongoose.model('Post', postSchema);