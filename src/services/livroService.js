import * as livroModel from '../models/livroModel.js';

async function getAllLivros() {
  return await livroModel.getLivros();
}

async function getLivro(id) {
  return await livroModel.getLivroById(id);
}

async function createLivro(livro) {
  return await livroModel.createLivro(livro);
}

async function updateLivro(id, livro) {
  return await livroModel.updateLivro(id, livro);
}

async function deleteLivro(id) {
  return await livroModel.deleteLivro(id);
}

export { getAllLivros, getLivro, createLivro, updateLivro, deleteLivro };
