import mongoose, { Schema, models } from "mongoose";

// Assim como a lib zod faz a validação dos inputs e tratamento dos dados na entrada, o mongoose também faz porém de maneira direta sem a necessidade de libs adicionais.

// A tipagem dos dados para a criação do schema é feita de maneira semelhante a do zod, a diferença é que os inputs recebidos no schema são tratados como objetos de um objeto principal e as propriedades para cada input é tipificado e validado com a propriedade required.

// Depois de tratar o input principal um outro objeto é adicionado, o timestamp, que indica quando o registro foi criado.

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Após a validação do schema, uma modelagem para o input que será adicionado no banco de dados é criada.

// Duas opções de valor para a modelagem são definidas, uma é o models.User da lib mongoose e a outra é a modelagem mongoose.model que recebe 2 argumentos, o nome da modelagem e o schema.

const User = models.User || mongoose.model("User", userSchema);

export default User;