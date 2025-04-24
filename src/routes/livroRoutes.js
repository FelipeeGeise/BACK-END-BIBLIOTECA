import express from 'express';
import {
  getLivrosController,
  getLivroByIdController,
  createLivroController,
  updateLivroController,
  deleteLivroController
} from '../controllers/livroController.js';

function livroRoutes() {
  const appRouter = express.Router();

  appRouter.get('/livros', getLivrosController);
  appRouter.get('/livros/:id', getLivroByIdController);
  appRouter.post('/livros', createLivroController);
  appRouter.put('/livros/:id', updateLivroController);
  appRouter.delete('/livros/:id', deleteLivroController);

  return appRouter;
}

export default livroRoutes;
