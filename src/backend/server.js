"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = require("mysql");
// Porta do servidor
var PORT = 3000;
// Configurar o Express
var app = (0, express_1.default)();
// Permitir requisições com JSON
app.use(express_1.default.json());
// Configuração do banco de dados
var connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'app_europa_tour'
});
// Conectar ao banco de dados
connection.connect(function (err) {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
    else {
        console.log('Conectado ao banco de dados MySQL');
    }
});
// Rota para lidar com o cadastro de usuários
app.post('/api/cadastro', function (req, res) {
    var _a = req.body, nome = _a.nome, email = _a.email, senha = _a.senha;
    var sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], function (err, result) {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).json({ message: 'Erro ao cadastrar usuário' });
        }
        else {
            console.log('Usuário cadastrado com sucesso');
            res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
        }
    });
});
// Porta do servidor
app.listen(PORT, function () {
    console.log("Servidor rodando em http://localhost:".concat(PORT));
});
