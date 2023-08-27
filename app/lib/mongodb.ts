import mongoose from "mongoose";

// A conexão com o banco de dados é feita de maneira semelhante ao knex, porém as conexões pool aparentemente são feitas e configuradas pelo próprio mongoose.
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}