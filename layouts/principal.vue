<script setup>
import 'flowbite';
import Iconoir from 'iconoir/icons/iconoir.svg'
</script>
<template>
   <body class="w-screen overflow-hidden">
      <div class="contained-flex h-screen w-full">
         <sidebar/>
         <main class=" h-screen mr-8 ml-20 overflow-hidden">
            <section class="">
               <slot></slot>
            </section>
         </main>
      </div>
   </body>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@100;400;500;700&display=swap');

/*Estilo general*/
body{
   font-family: 'Roboto',sans-serif;
}
</style>