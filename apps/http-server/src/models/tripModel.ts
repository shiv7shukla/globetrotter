import mongoose from "mongoose";

export interface ITrip {
    _id: mongoose.Types.ObjectId,
    tripName: string,
    startDate: Date,
    endDate: Date,
    city: string,
    country: string,
    itinerary?: [{
        startDate: Date,
        endDate: Date,
        budget: number,
        description: string
    }]
};

const tripSchema = new mongoose.Schema<ITrip> ({
    tripName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    itinerary: {
        type: [{
            startDate: {
                type: Date,
            },
            endDate: {
                type: Date,
            },
            budget: {
                type: Number,
                min: 0
            },
            description: {
                type: String,
            }
        }],
        default: []
    }
}, { timestamps: true });

export const Trip = mongoose.models.Trip as mongoose.Model<ITrip> || mongoose.model<ITrip>("Trip", tripSchema);