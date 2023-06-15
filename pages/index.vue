<script setup>
    definePageMeta({
        layout:"default",
    });
</script>
<template>
             <div class="w-full grid place-items-center">
                <div class="top flex-col">
                    <h1 class="font-bold text-white text-4xl text-center">Iniciar sesión</h1>
                    <h3 class="font-semibold text-white mt-4 text-center">AD-ASTRA</h3>
                </div>
                <form class="middle flex-col w-1/2 mt-20" method="POST" action="" novalidate>
                    <div class="relative z-0">
                        <input type="text" id="username" name="usuario" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer" placeholder=" " autocomplete="off" />
                        <label for="username" class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</label>
                    </div>
                    <div class="relative z-0 mt-10 mb-4">
                        <input type="password" id="password" name="clave_usuario" class="block py-2.5 px-0 w-full text-sm text-gray-200 border-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer" placeholder=" " autocomplete="off"/>
                        <label for="password" class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                    </div>
                    <div class="ml-auto text-right">
                        <a href="" class="btn-forgot text-white font-thin text-xs">Olvidaste tu contraseña?</a>
                    </div>
                    <div class="end flex mt-16 justify-center">
                        <NuxtLink to="/main" type="submit" class="btn-login h-16 text-white w-80 text-lg justify-center flex items-center font-semibold bg-purpleLogin rounded-lg transition-all duration-200">Iniciar sesión</NuxtLink>
                    </div>
                </form>
            </div>
</template>
<style>
    .end .btn-login{
    background-color: #3F4280;
    border-radius: 10px;
}

/*Animación de olvido su contraseña*/
.btn-forgot {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: white;
}

.btn-forgot::before,
.btn-forgot::after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.btn-forgot::before {
  right: 50%;
  transform-origin: right;
}

.btn-forgot::after {
  left: 50%;
  transform-origin: left;
}

.btn-forgot:hover::before,
.btn-forgot:hover::after {
  width: 50%;
}

/*Animación del botón de login*/
.btn-login:hover{
  font-size: 22px;
  background-color: #5357aa;
}
</style>
