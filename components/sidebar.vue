<template>
    <aside class="flex justify-center items-center fixed top-0 left-0 z-40 w-16 h-screen">
      <div class="flex-col">
        <ul class="space-y-2 font-medium">
          <li>
            <NuxtLink class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700" to="/principal">
              <svg width="28px" height="28px" viewBox="0 0 24 24"
                  stroke-width="2.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                  <path d="M10 18v-3a2 2 0 012-2v0a2 2 0 012 2v3M2 8l9.732-4.866a.6.6 0 01.536 0L22 8"
                      stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                  <path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" stroke="#fff" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </NuxtLink>
          </li>
          <li class="item">
            <NuxtLink to="/enlace_amigo" class="flex items-center justify-center rounded-lg p-2 hover:bg-gray-700">
              <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M12 6l-7.718 4.824a.6.6 0 00-.282.508V21.4a.6.6 0 00.6.6H12m0-16l7.718 4.824a.6.6 0 01.282.508V21.4a.6.6 0 01-.6.6H12m0-16V4m0-2v2m-2 0h2m0 0h2m-2 18v-5M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </NuxtLink>
          </li>
          <li class="item">
            <NuxtLink to="/usuario" class="flex items-center p-2 rounded-lg justify-center hover:bg-gray-700">
              <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#fff" stroke-width="2.5"></path>
              <path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M8.5 10a.5.5 0 110-1 .5.5 0 010 1zM15.5 10a.5.5 0 110-1 .5.5 0 010 1z" fill="#000000" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </NuxtLink>
          </li>
          <li class="item">
            <NuxtLink to="/pagina" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
              <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#fff" stroke-width="2.5"></path>
              <path d="M6 8h1" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </NuxtLink>
          </li>
          <li class="item">
            <a href="/anuncio" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </li>
          <li class="item">
            <NuxtLink to="/contacto" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                <svg width="28px" height="28px" stroke-width="2.5"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path
                    d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
                    stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
            </svg>
            </NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/donacion" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"></path><path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

            </NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="/donante" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1" stroke="#fff" stroke-width="2.5" stroke-linecap="round"></path><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </NuxtLink>
        </li>
        <li class="item">
            <NuxtLink to="calendar.html" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </NuxtLink>
        </li>
        <li class="" id="item">
            <NuxtLink to="/personal" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                <svg width="28px" stroke-width="2.5" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114" stroke="#fff" stroke-width="2.5" stroke-linecap="round"></path><path d="M8 3v8l2.5-1.6L13 11V3" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 17h14M6 21h14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"></path><path d="M6 21a2 2 0 110-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </NuxtLink>
        </li>
        <div class="flex justify-center items-end h-24">
          <li id="item">
            <NuxtLink to="/" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700"><svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 12h7m0 0l-3 3m3-3l-3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></NuxtLink>
          </li>
        </div>
        </ul>
      </div>
    </aside>
</template>
<style>
aside {
    background-color: #1b1c30;
}
</style>