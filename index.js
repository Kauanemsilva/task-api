const express = require("express");
const app = express();
const dotenv = require("dotenv");
const tasksRoutes = require("./routes/tasks");

dotenv.config();
app.use(express.json());

app.use("/tasks", tasksRoutes);


app.get('/', (req, res) => {
  res.send('🚀 API de Tarefas da Kauane rodando com sucesso!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


