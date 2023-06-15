<script setup>
import 'flowbite';
import Iconoir from 'iconoir/icons/iconoir.svg'
</script>
<template>
   <body class="w-screen overflow-hidden">
      <div class="contained-flex h-screen w-full">
         <sidebar/>
         <main class=" h-screen mr-8 ml-20">
            <section>
               <slot></slot>
            </section>
         </main>
      </div>
   </body>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/*Estilo general*/
body{
    font-family: 'Poppins', sans-serif;
}
</style>