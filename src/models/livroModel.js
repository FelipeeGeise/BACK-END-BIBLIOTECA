import { getDB } from '../database/db.js';

function getLivros() {
  const db = getDB();
  return db.all('SELECT * FROM livros');
}

function getLivroById(id) {
  const db = getDB();
  return db.get('SELECT * FROM livros WHERE id = ?', [id]);
}

function createLivro(livro) {
  const db = getDB();
  const { titulo, num_paginas, isbn, editora } = livro;
  return db.run(`
    INSERT INTO livros (titulo, num_paginas, isbn, editora)
    VALUES (?, ?, ?, ?)
  `, [titulo, num_paginas, isbn, editora]);
}

function updateLivro(id, livro) {
  const db = getDB();
  const { titulo, num_paginas, isbn, editora } = livro;
  return db.run(`
    UPDATE livros SET titulo = ?, num_paginas = ?, isbn = ?, editora = ? WHERE id = ?
  `, [titulo, num_paginas, isbn, editora, id]);
}

function deleteLivro(id) {
  const db = getDB();
  return db.run('DELETE FROM livros WHERE id = ?', [id]);
}

export { getLivros, getLivroById, createLivro, updateLivro, deleteLivro };
