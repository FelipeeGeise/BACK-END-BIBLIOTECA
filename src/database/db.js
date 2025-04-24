import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

let db;

function initDB() {
  return open({
    filename: path.resolve('./src/database/biblioteca.db'),
    driver: sqlite3.Database,
  })
    .then((database) => {
      db = database;
      return db.exec(`
        CREATE TABLE IF NOT EXISTS livros (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo TEXT NOT NULL,
          num_paginas INTEGER NOT NULL,
          isbn TEXT NOT NULL,
          editora TEXT NOT NULL
        );
      `);
    })
    .then(() => {
      console.log('Banco de dados inicializado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao inicializar o banco de dados:', error);
    });
}

function getDB() {
  return db;
}

export { initDB, getDB };
