import mongoose, { Schema, models } from "mongoose";

// Importar ferramentas schema e modelagem do mongoose.
// Criar schema typescript para o model.
// Neste caso não quero armazenar no banco de dados minha senha dos usuários que logarem via plataformas externas.

const userGoogleSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const UserGoogle = models.UserGoogle || mongoose.model("UserGoogle", userGoogleSchema);

export default UserGoogle;