import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    totalValue: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    item: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
});

export default mongoose.model('Order', orderSchema);