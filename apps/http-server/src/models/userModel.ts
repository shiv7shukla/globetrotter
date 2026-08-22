import mongoose from "mongoose";

export interface IUser {
    _id: mongoose.Types.ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    city: string,
    country: string,
    phoneNumber: string,
};

const userSchema = new mongoose.Schema<IUser> ({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxLength: 15
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
}, { timestamps: true });

export const User = mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>("user", userSchema);