<?php

include "Database.php";
include "access_control.php";

$db = new Database();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['email'], $data['senha'])) {
        $email = $data['email'];
        $senha = $data['senha'];

        if (!empty($email) && !empty($senha)) {
            error_log("Tentativa de login com email: $email");
            $usuario = $db->obterUsuarioPorEmailESenha($email, $senha);

            if ($usuario) {
                // Supondo que você gera um token de alguma forma
                $token = bin2hex(random_bytes(16));
                error_log("Login bem-sucedido para o usuário: " . $email);
                echo json_encode(['status' => 'sucesso', 'mensagem' => 'Login realizado com sucesso', 'token' => $token]);
            } else {
                error_log("Falha no login: Email ou senha incorretos para o usuário: " . $email);
                echo json_encode(['status' => 'erro', 'mensagem' => 'Email ou senha incorretos']);
            }
        } else {
            error_log("Falha no login: Campos vazios");
            echo json_encode(['status' => 'erro', 'mensagem' => 'Preencha todos os campos']);
        }
    } else {
        error_log("Dados de login não fornecidos.");
        echo json_encode(['status' => 'erro', 'mensagem' => 'Dados de login não fornecidos']);
    }
}

$db->fecharConexao();
