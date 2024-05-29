export function isAuthenticated(): boolean { //se usuário está autenticado
    return !!localStorage.getItem('authToken')
}

export function login(token: string): void { //login
    localStorage.setItem('authToken', token)
}

export function logout(): void { //logout
    localStorage.removeItem('authToken')
}