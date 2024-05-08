<?php

class Database
{

    private $host = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "app_europa_tour";
    private $conn;

    // Construtor para conectar ao banco de dados
    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("DataBase Connection failed: " . $this->conn->connect_error);
        }
    }

    // Método para inserir um novo usuário
    public function cadastrarUsuario($nome, $email, $senha)
    {
        $nome = $this->conn->real_escape_string($nome);
        $email = $this->conn->real_escape_string($email);
        $senha = $this->conn->real_escape_string($senha);

        $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

        if ($this->conn->query($sql) === TRUE) {
            return true; // Sucesso ao cadastrar usuário
        } else {
            return false; // Erro ao cadastrar usuário
        }
    }

    // Método para verificar se o email já está cadastrado
    public function verificarEmailExistente($email) {

        $email = $this->conn->real_escape_string($email);

        $sql = "SELECT COUNT(*) as total FROM usuarios WHERE email = '$email'";
        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['total'] > 0;
        }

        return false;
        
    }

    // Método para fechar a conexão com o banco de dados
    public function fecharConexao()
    {
        $this->conn->close();
    }
}
