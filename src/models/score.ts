import { Schema, model, models } from 'mongoose'

const scoreSchema = new Schema({
    score: {
        type: Number,
        required: [true, 'Score is required']
    },
    username: {
        type: String,
        required: [true, 'User name is required'],
        minlength: [3, 'User name must be at least 6 characters'],
        maxlength: [50, 'User name must be at most 50 characters']
    }
})

const Score = models.Score || model('Score', scoreSchema)
export default Score