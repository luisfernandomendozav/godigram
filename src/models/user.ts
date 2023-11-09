import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    username: {
        type: String,
        required: [true, 'User name is required'],
        minlength: [3, 'Fullname must be at least 6 characters'],
        maxlength: [50, 'Fullname must be at most 50 characters'],
    }
})

const User = models.User || model('User', userSchema)
export default User