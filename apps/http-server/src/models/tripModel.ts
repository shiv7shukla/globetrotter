import mongoose from "mongoose";

export interface ITrip {
    _id: mongoose.Types.ObjectId,
    tripName: string,
    startDate: Date,
    endDate: Date,
    city: string,
    country: string
};

const tripSchema = new mongoose.Schema<ITrip> ({
    tripName: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true,
        trim: true
    },
    endDate: {
        type: Date,
        required: true,
        unique: true,
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
    }
}, { timestamps: true });

export const Trip = mongoose.models.Trip as mongoose.Model<ITrip> || mongoose.model<ITrip>("Trip", tripSchema);