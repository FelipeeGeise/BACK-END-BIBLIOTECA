import * as livroService from '../services/livroService.js';

async function getLivrosController(req, res) {
  try {
    const livros = await livroService.getAllLivros();
    res.status(200).json(livros);
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar livros.' });
  }
}

async function getLivroByIdController(req, res) {
  const { id } = req.params;
  try {
    const livro = await livroService.getLivro(id);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado.' });
    }
    res.status(200).json(livro);
  } catch (error) {
    console.error('Erro ao buscar livro:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar livro.' });
  }
}

async function createLivroController(req, res) {
  const { titulo, num_paginas, isbn, editora } = req.body;
  const livro = { titulo, num_paginas, isbn, editora };
  console.log('Dados recebidos para criação do livro:', req.body);
  
  try {
    const novoLivro = await livroService.createLivro(livro);
    res.status(201).json({ mensagem: 'Livro cadastrado com sucesso!', livro: novoLivro });
  } catch (error) {
    console.error('Erro ao cadastrar livro:', error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar livro.' });
  }
}

async function updateLivroController(req, res) {
  const { id } = req.params;
  const { titulo, num_paginas, isbn, editora } = req.body;
  const livro = { titulo, num_paginas, isbn, editora };
  try {
    const livroAtualizado = await livroService.updateLivro(id, livro);
    res.status(200).json({ mensagem: 'Livro atualizado com sucesso!', livro: livroAtualizado });
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar livro.' });
  }
}

async function deleteLivroController(req, res) {
  const { id } = req.params;
  try {
    await livroService.deleteLivro(id);
    res.status(200).json({ mensagem: 'Livro deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar livro:', error);
    res.status(500).json({ mensagem: 'Erro ao deletar livro.' });
  }
}

export { getLivrosController, getLivroByIdController, createLivroController, updateLivroController, deleteLivroController };
