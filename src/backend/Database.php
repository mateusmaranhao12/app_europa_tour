<?php

class Database
{
    private $host = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "app_europa_tour";
    private $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->dbname);

        if ($this->conn->connect_error) {
            die("Database connection failed: " . $this->conn->connect_error);
        }
    }

    public function cadastrarUsuario($nome, $email, $senha)
    {
        // Escapar entradas para evitar SQL injection
        $nome = $this->conn->real_escape_string($nome);
        $email = $this->conn->real_escape_string($email);

        // Gerar a hash da senha
        $senhaHash = password_hash($this->conn->real_escape_string($senha), PASSWORD_BCRYPT);

        // Inserir usuário no banco de dados
        $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senhaHash')";

        if ($this->conn->query($sql) === TRUE) {
            return true; // Sucesso ao cadastrar usuário
        } else {
            error_log("Erro ao cadastrar usuário: " . $this->conn->error);
            return false; // Erro ao cadastrar usuário
        }
    }


    public function verificarEmailExistente($email)
    {
        $email = $this->conn->real_escape_string($email);

        $sql = "SELECT COUNT(*) as total FROM usuarios WHERE email = '$email'";
        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['total'] > 0;
        }

        return false;
    }

    public function obterUsuarioPorEmailESenha($email, $senha)
    {
        // Escapar email para evitar SQL injection
        $email = $this->conn->real_escape_string($email);

        // Selecionar usuário pelo email
        $sql = "SELECT * FROM usuarios WHERE email = '$email'";
        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            error_log("Usuário encontrado: " . print_r($row, true)); // Log detalhado do usuário encontrado

            // Verificar a senha
            if (password_verify($senha, $row['senha'])) {
                return $row;
            } else {
                error_log("Senha incorreta para o usuário: " . $email);
            }
        } else {
            error_log("Usuário não encontrado: " . $email);
        }

        return false;
    }


    public function fecharConexao()
    {
        $this->conn->close();
    }
}
