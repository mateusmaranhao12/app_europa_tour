import express, { Request, Response } from 'express'
import mysql, { Connection } from 'mysql'

// Porta do servidor
const PORT = 3000

// Configurar o Express
const app = express()

// Permitir requisições com JSON
app.use(express.json())

// Configuração do banco de dados
const connection: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'app_europa_tour'
})

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err)
    } else {
        console.log('Conectado ao banco de dados MySQL')
    }
})

// Rota para lidar com o cadastro de usuários
app.post('/api/cadastro', (req: Request, res: Response) => {
    const { nome, email, senha } = req.body

    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)'
    connection.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err)
            res.status(500).json({ message: 'Erro ao cadastrar usuário' })
        } else {
            console.log('Usuário cadastrado com sucesso');
            res.status(200).json({ message: 'Usuário cadastrado com sucesso' })
        }
    })
})

// Porta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})