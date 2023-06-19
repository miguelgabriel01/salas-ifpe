const express = require('express');
//const bodyParser = require('body-parser');
//const jwt = require('jsonwebtoken');

const app = express();




// Rota de autenticação

// Middleware de autenticação


//JSON com as informações da sala
const salas = [
    {
      "abreviado": "Biblioteca",
      "nomeCompleto": "Biblioteca",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "João Silva",
      "descricao": "Local destinado ao empréstimo de livros e estudos."
    },
    {
      "abreviado": "Cradt",
      "nomeCompleto": "Centro de Referência em Artes Digitais e Tecnologia",
      "horarioFuncionamento": "9:00 - 20:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Maria Santos",
      "descricao": "Espaço dedicado ao desenvolvimento de projetos artísticos e tecnológicos."
    },
    {
      "abreviado": "Lab01",
      "nomeCompleto": "Laboratório 01",
      "horarioFuncionamento": "8:00 - 22:00",
      "diaFuncionamento": "Segunda a Sábado",
      "responsavel": "Pedro Oliveira",
      "descricao": "Laboratório equipado para realização de experimentos e pesquisas."
    },
    {
      "abreviado": "Lab02",
      "nomeCompleto": "Laboratório 02",
      "horarioFuncionamento": "8:00 - 22:00",
      "diaFuncionamento": "Segunda a Sábado",
      "responsavel": "Ana Souza",
      "descricao": "Laboratório equipado para realização de experimentos e pesquisas."
    },
    {
      "abreviado": "Lab03",
      "nomeCompleto": "Laboratório 03",
      "horarioFuncionamento": "8:00 - 22:00",
      "diaFuncionamento": "Segunda a Sábado",
      "responsavel": "Carlos Rodrigues",
      "descricao": "Laboratório equipado para realização de experimentos e pesquisas."
    },
    {
      "abreviado": "Lab04",
      "nomeCompleto": "Laboratório 04",
      "horarioFuncionamento": "8:00 - 22:00",
      "diaFuncionamento": "Segunda a Sábado",
      "responsavel": "Mariana Almeida",
      "descricao": "Laboratório equipado para realização de experimentos e pesquisas."
    },
    {
      "abreviado": "Lab05",
      "nomeCompleto": "Laboratório 05",
      "horarioFuncionamento": "8:00 - 22:00",
      "diaFuncionamento": "Segunda a Sábado",
      "responsavel": "José Santos",
      "descricao": "Laboratório equipado para realização de experimentos e pesquisas."
    },
    {
      "abreviado": "SalaB02",
      "nomeCompleto": "Sala B02",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Maria Oliveira",
      "descricao": "Sala de aula para turmas do curso B."
    },
    {
      "abreviado": "SalaB03",
      "nomeCompleto": "Sala B03",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Carlos Silva",
      "descricao": "Sala de aula para turmas do curso B."
    },
    {
      "abreviado": "SalaB04",
      "nomeCompleto": "Sala B04",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Ana Rodrigues",
      "descricao": "Sala de aula para turmas do curso B."
    },
    {
      "abreviado": "SalaB05",
      "nomeCompleto": "Sala B05",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Pedro Almeida",
      "descricao": "Sala de aula para turmas do curso B."
    },
    {
      "abreviado": "SalaB06",
      "nomeCompleto": "Sala B06",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Mariana Santos",
      "descricao": "Sala de aula para turmas do curso B."
    },
    {
      "abreviado": "SalaB07",
      "nomeCompleto": "Sala B07",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "José Oliveira",
      "descricao": "Sala de aula para turmas do curso B."
    },
    {
      "abreviado": "Auditorio",
      "nomeCompleto": "Auditório",
      "horarioFuncionamento": "8:00 - 22:00",
      "diaFuncionamento": "Segunda a Domingo",
      "responsavel": "Fernanda Silva",
      "descricao": "Espaço destinado a apresentações e eventos."
    },
    {
      "abreviado": "BanheiroM",
      "nomeCompleto": "Banheiro Masculino",
      "horarioFuncionamento": "24 horas",
      "diaFuncionamento": "Todos os dias",
      "responsavel": "Não aplicável",
      "descricao": "Banheiro masculino para uso público."
    },
    {
      "abreviado": "BanheiroF",
      "nomeCompleto": "Banheiro Feminino",
      "horarioFuncionamento": "24 horas",
      "diaFuncionamento": "Todos os dias",
      "responsavel": "Não aplicável",
      "descricao": "Banheiro feminino para uso público."
    },
    {
      "abreviado": "Refeitorio",
      "nomeCompleto": "Refeitório",
      "horarioFuncionamento": "11:00 - 14:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Maria Santos",
      "descricao": "Local para refeições e alimentação dos estudantes."
    },
    {
      "abreviado": "Lanchonete",
      "nomeCompleto": "Lanchonete",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Carlos Oliveira",
      "descricao": "Lanchonete que oferece opções de lanches e bebidas."
    },
    {
      "abreviado": "Copa",
      "nomeCompleto": "Copa",
      "horarioFuncionamento": "8:00 - 18:00",
      "diaFuncionamento": "Segunda a Sexta",
      "responsavel": "Carlos Oliveira",
      "descricao": "Espaço para preparo de alimentos e descanso dos funcionários."
    }
  ]

// Rota para listar todas as salas
app.get('/salas', (req, res) => {
    res.json(salas);
});

// Rota para obter os dados de uma sala específica pelo nome completo
app.get('/salas/:nome', (req, res) => {
    const nomeSala = req.params.nome;
    const sala = salas.find(s => s.nomeCompleto === nomeSala);
    if (sala) {
      res.json(sala);
    } else {
      res.status(404).json({ mensagem: 'Sala não encontrada' });
    }
});  





//iniciar o servidor 
const port  = 3000;
app.listen(process.env.PORT || port);