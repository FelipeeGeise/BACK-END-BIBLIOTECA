import express from "express";
import cors from "cors";
import { initDB } from "./src/database/db.js";
import livroRoutes from "./src/routes/livroRoutes.js";

function startServer() {
  const app = express();
  const port = 3000;

  app.use(cors());

  app.use(express.json());
  app.use("/api", livroRoutes());

  (async () => {
    await initDB(); // Inicializa o banco de dados
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })();
}

startServer();
