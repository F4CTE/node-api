import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import MediaType from "./MediaTypeEnum.js";
import MediaStatus from "./MediaStatusEnum.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    medias: [
        {
            type: {
                type: String,
                enum: MediaType,
                required: true
            },
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            status: {
                type: String,
                enum: MediaStatus,
                required: true
            },
            favorite: {
                type: Boolean,
                default: false,
            }
        }
    ],
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User
