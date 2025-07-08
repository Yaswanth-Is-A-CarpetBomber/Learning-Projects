import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    street: String,
    city: String
})

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    id: String,
    address: addressSchema,
    email: {
        type: String,
        required: false
    },
    enteredAt: {
        type: Date,
        default: () => Date.now()
    }
});

export default mongoose.model("User", userSchema);