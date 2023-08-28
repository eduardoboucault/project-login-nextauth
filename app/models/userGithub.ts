import mongoose, { Schema, models } from "mongoose";

// Importar ferramentas de schema e modelagem do mongoose.
// Criar schema typescript para o model.
// Neste caso não quero armazenar no banco de dados minha senha dos usuários que logarem via plataformas externas.

const userGithubSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const UserGithub = models.UserGithub || mongoose.model("UserGithub", userGithubSchema);

export default UserGithub;