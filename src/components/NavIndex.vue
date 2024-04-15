<template>
    <nav class="navbar nav-pag-index navbar-expand-lg">
        <div class="container-fluid">
            <h2 class="navbar-brand" href=""><i class="fa-solid fa-train"></i> App Europa Tour</h2>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/' }" class="nav-link"
                            to="/">Página
                            Inicial</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/login' }" class="nav-link"
                            to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/cadastro' }" class="nav-link"
                            to="/cadastro">Cadastro</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
@import '../scss/navbars.scss';
</style>