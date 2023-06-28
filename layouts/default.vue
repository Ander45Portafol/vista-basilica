<template>
    <body class="overflow-hidden h-screen w-screen">
        <main class="contained h-full w-full flex">
        <div class="container-left w-1/2 flex items-center justify-center">
            <slot/>
        </div>
            <div class="container-right w-1/2 relative flex items-center justify-center">
            <img src="/img/cohete_login.svg" alt="cohete_login" class="w-full">
        </div>
    </main>
    </body>
</template>
<script setup>
</script>
<style scoped>
    /*Importar fuente*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/*Estilo general*/
body{
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(180deg, rgba(63, 66, 128, 0.71) 0%, rgba(49, 50, 71, 0.79) 100%);
    background-color: #1E1E1E;
}

/*Separador*/
.container-left{
  border-right: 4px solid #808080;
}

/*Centrar imagen*/
.container-right{
  margin-right: 15px;
  margin-left: 15px;
}

/*Responsive*/
@media (max-width: 1200px) {
  .container-right {
    display: none;
  }
    
  .container-left {
    margin-top: 70px;
    border: none;
    width: 100%;
    height: 100vh;
  }
}
</style>