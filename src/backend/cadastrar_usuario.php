<?php

include "Database.php"; // Inclua o arquivo da classe Database
include "access_control.php";

// Criar uma instância da classe Database
$db = new Database();

// cadastrar usuario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST['nome'], $_POST['email'], $_POST['senha'])) {

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        if (!empty($nome) && !empty($email) && !empty($senha)) {

            // Verificar se o email já foi cadastrado
            if ($db->verificarEmailExistente($email)) {
                echo json_encode(['status' => 'info', 'mensagem' => 'Usuário já cadastrado!']);
            } else {
                $cadastradoComSucesso = $db->cadastrarUsuario($nome, $email, $senha);

                if ($cadastradoComSucesso) {
                    // Usuário cadastrado com sucesso
                    echo json_encode(['status' => 'sucesso', 'mensagem' => 'Usuário cadastrado com sucesso']);
                } else {
                    // Erro ao cadastrar usuário
                    echo json_encode(['status' => 'erro', 'mensagem' => 'Erro ao cadastrar usuário']);
                }
            }
        } else {
            echo json_encode(['status' => 'erro', 'mensagem' => 'Erro, preencha todos os campos!']);
        }
    }
}

// Fechar a conexão com o banco de dados quando não for mais necessário
$db->fecharConexao();
