import mongoose , { Schema, models } from "mongoose";

const userFacebookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const UserFacebook = models.UserFacebook || mongoose.model("UserFacebook", userFacebookSchema);

export default UserFacebook;