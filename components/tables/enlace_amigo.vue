<template>
	<!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
	<div class="contained-data flex-col" v-for="enlace in datos_enlaces[paginacion - 1]" :key="enlace.id">
		<div
			class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
			<div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
				<img :src="api_url + enlace.campos.imagen_enlace"
					@click="mostrarLightBox(api_url + enlace.campos.imagen_enlace)"
					class="h-10 w-10 cursor-pointer rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
				<!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
				<div
					class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
					<p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
						{{ enlace.campos.titulo_enlace }}
					</p>
					<p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
						<a href="#">{{ enlace.campos.enlace_amigo }}</a>
					</p>
					<p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
						{{ enlace.campos.descripcion_enlace }}
					</p>
				</div>
			</div>
			<!-- Al darle clic al evento leerUnEnlace ejecuta la funcion -->
			<div
				class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
				<button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn" id="btnedit"
					v-if="enlace.campos.visibilidad_enlace == 1" @click.prevent="estadoActualizar(enlace.id)">
					<svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg" color="#000000">
						<path
							d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
							stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</button>
				<button
					class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
					@click="borrarEnlace(enlace.id)" v-if="enlace.campos.visibilidad_enlace == 1">
					<svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
						xmlns="http://www.w3.org/2000/svg" color="#000000">
						<path
							d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
							stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</button>
				<button @click="recuperarUnEnlace(enlace.id)"
					class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
					v-else>
					<svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg" color="#000000">
						<path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
							stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
							stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3" stroke-linecap="round"
							stroke-linejoin="round"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<!--Llama la propiedad de lightbox para las imagenes-->
	<vue-easy-lightbox :visible="visible_ref" :imgs="imgs_ref" :index="index_ref"
		@hide="esconderLightBox"></vue-easy-lightbox>
	<!-- Modal principal-->
	<div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
		class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
		<div class="relative w-full max-w-xl max-h-full">
			<!-- Contenido del modal -->
			<div class="relative rounded-lg shadow modal">
				<!--Encabezado del modal -->
				<div class="flex items-start justify-between p-4 rounded-t">
					<div class="flex-col ml-4 pt-4">
						<!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
						<p class="text-3xl font-bold text-gray-100" id="modalText"></p>
						<p class="text-base font-medium text-gray-400">Enlace amigo</p>
					</div>
					<!-- Boton para cerrar el modal -->
					<button type="button" id="closeModal"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-hide="staticModal">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
					</button>
				</div>
				<!-- Cuerpo del modal  -->
				<div class="p-6 space-y-6 pb-14">
					<!-- Se utiliza el modificador @submit.prevent para evitar la recarga de la página al enviar el formulario. En su lugar, se llama a la función submitForm() definida en Vue.js para ejecutar la lógica personalizada del envío del formulario. -->
					<form @submit.prevent="submitForm()" class="flex justify-evenly flex-wrap">
						<div class="flex-col w-64">
							<!-- Se enlazan todos los inputs usando el v-model a la variable form -->
							<input type="hidden" id="id_enlace_amigo" v-model="form.id_enlace_amigo" />
							<!-- Campo de entrada Titulo- Enlace-->
							<div class="relative z-0">
								<input type="text" id="titulo_enlace" name="titulo_enlace" maxlength="200" required
									@input="validarTitulo()"
									class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
									placeholder=" " autocomplete="off" v-model="form.titulo_enlace" />
								<span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.titulo_enlace">
									{{ form.titulo_enlace.length }} /200</span>
								<span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>
									0 /200</span>
								<label for="titulo_enlace"
									class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título
									- Enlace<span class="text-sm ml-1"> * </span></label>
							</div>
							<div v-if="!validarTitulo()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
								role="alert">
								<svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
									viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clip-rule="evenodd"></path>
								</svg>
								<div>
									El nombre de la página solo permite caracteres
									<span class="font-medium">
										alfanuméricos y algunos especiales (- / |).</span>
								</div>
							</div>
							<!-- Campo de entrada Enlace- Amigo-->
							<div class="relative z-0 mt-6">
								<input type="text" id="enlace_amigo" name="enlace_amigo" maxlength="250" required
									class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
									placeholder=" " autocomplete="off" v-model="form.enlace_amigo" />
								<label for="enlace_amigo"
									class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enlace
									- Amigo<span class="text-sm ml-1"> * </span></label>
							</div>
							<!-- Campo de entrada Descripcion- Enlace-->
							<div class="relative z-0 mt-6">
								<textarea id="descripcion_enlace" name="descripcion_enlace" maxlength="1000"
									class="block py-2.5 px-0 w-full min-h-[3rem] h-[3rem] max-h-[12rem] text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
									placeholder=" " autocomplete="off" v-model="form.descripcion_enlace" />
								<span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
									v-if="form.descripcion_enlace">
									{{ form.descripcion_enlace.length }} /1000</span>
								<span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else>
									0 /1000</span>
								<label for="descripcion_enlace"
									class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
									- Enlace</label>
							</div>
							<!-- Campo de entrada Visibilidad- Enlace-->
							<div class="flex-col mt-6">
								<label for="" class="text-sm text-gray-200">Visibilidad - Enlace</label>
								<div class="flex justify-start mt-2">
									<label class="relative inline-flex items-center mb-5 cursor-pointer">
										<input type="checkbox" value="" class="sr-only peer" id="visibilidad_enlace"
											name="visibilidad_enlace" v-model="form.visibilidad_enlace" />
										<div
											class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
										</div>
									</label>
								</div>
							</div>
						</div>
						<div class="flex-col w-64">
							<div class="">
								<p class="mb-4 text-center text-gray-200">Imagen - Enlace</p>
								<div class="flex-col m-auto">
									<div class="h-44 w-40 border-2 border-slate-900 ml-14 rounded-lg cursor-pointer relative max-[630px]:m-auto"
										@click="seleccionarArchivo" @mouseover="iconoBorrarTrue"
										@mouseleave="iconoBorrarFalse">
										<img v-if="imagenPreview" :src="imagenPreview" class="h-44 w-40 rounded-lg" />
										<input type="file" ref="inputImagen" class="hidden" @change="cambiarImagen" />
										<div v-if="mostrarIconoBorrar"
											class="absolute h-44 inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
												viewBox="0 0 24 24"
												style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: ">
												<path
													d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
												</path>
											</svg>
										</div>
									</div>
									<div class="m-auto max-[630px]:text-center max-[630px]:ml-[-58px]">
										<button type="button"
											class="w-40 ml-14 py-2 mt-3 bg-white rounded-md hover:bg-slate-300 text-center"
											@click="seleccionarArchivo">
											Seleccionar Imagen
										</button>
									</div>
								</div>
							</div>
							<!-- Modal botones -->
							<div class="modal-buttons mt-24 flex justify-end items-end">
								<button class="h-10 w-10 rounded-lg flex justify-center items-center mr-4" type="button"
									id="btnModalClear" @click="limpiarForm()">
									<svg width="22px" height="22px" viewBox="0 0 24 24" stroke-width="2" fill="none"
										xmlns="http://www.w3.org/2000/svg" color="#000000">
										<path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#23B7A0"
											stroke-width="2" stroke-linecap="round"></path>
										<path
											d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
											stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round"></path>
										<path
											d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
											stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round"></path>
										<path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
											stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</button>
								<button class="h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalAdd"
									type="submit" :disabled="!validarTitulo()">
									<svg width="22px" height="22px" stroke-width="2" viewBox="0 0 24 24" fill="none"
										xmlns="http://www.w3.org/2000/svg" color="#000000">
										<path
											d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
											stroke="#23B7A0" stroke-width="2"></path>
										<path
											d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
											stroke="#23B7A0" stroke-width="2"></path>
									</svg>
								</button>
								<button class="h-10 w-10 rounded-lg flex justify-center items-center" type="submit"
									id="btnModalUpdate" :disabled="!validarTitulo()">
									<svg width=" 22px" height="22px" stroke-width="2" viewBox="0 0 24 24" fill="none"
										xmlns="http://www.w3.org/2000/svg" color="#000000">
										<path
											d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
											stroke="#23B7A0" stroke-width="2"></path>
										<path
											d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
											stroke="#23B7A0" stroke-width="2"></path>
									</svg>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.buttons-data .changebtn {
	border: 3px solid #3f4280;
}

.data-contained {
	border: 3px solid #1b1c30;
}

.buttons-data .editbtn {
	border: 3px solid #c99856;
}

.buttons-data .deletebtn {
	border: 3px solid #872727;
}

.modal {
	background: linear-gradient(180deg,
			rgba(63, 66, 128, 0.6241) 0%,
			rgba(49, 50, 71, 0.5609) 100%);
	background-color: #1e1e1e;
}

.modal-buttons button {
	background-color: #32345a;
}
</style>

<script setup>
//Importación de archivo de validaciones
import axios from "axios";
import Swal from "sweetalert2";
import validaciones from "../../assets/validaciones.js";
import VueEasyLightbox from "vue-easy-lightbox";

const props = defineProps({
	//Prop que se utiliza para cargar los datos de la tabla
	datos_enlaces: Array,
	//Prop que recibe la funcion de leerEnlace, para recargar la tabla, cada vez de finalizar alguna acción
	actualizar_datos: Function,
	paginacion: Number,
});

//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event("reset-timer");

//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
	//Codigo para abrir el modal, con el boton de crear
	const AGREGAR_BOTON = document.getElementById("btnadd");
	const MODAL_ID = document.getElementById("staticModal");
	const CERRAR_BOTON = document.getElementById("closeModal");
	const TITULO_MODAL = document.getElementById("modalText");
	const OPCIONES_MODAL = {
		backdrop: "static",
		backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
	};

	if (MODAL_ID) {
		const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
		AGREGAR_BOTON.addEventListener("click", function () {
			TITULO_MODAL.textContent = "Registrar";
			document.getElementById("btnModalAdd").classList.remove("hidden");
			document.getElementById("btnModalUpdate").classList.add("hidden");
			accionForm("crear");
			MODAL.show();
		});
		CERRAR_BOTON.addEventListener("click", function () {
			MODAL.hide();
		});
	}
	//Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
	token.value = localStorage.getItem("token");
});
//Variable reactiva para almacenar el token del localStorag
const token = ref(null);

//Variable para poder concectar con el storage de la api y asi poder buscar imagenes
var api_url = "http://localhost:8000/storage/enlacesAmigos/images/";

//Variable reactiva para verificar si mostrar o no el boton para borrar alguna imagen
const mostrarIconoBorrar = ref(false);
//Metodo para hacer visible el icono de borrar una imagen
function iconoBorrarTrue() {
	if (imagenPreview.value) {
		mostrarIconoBorrar.value = true;
	}
}
//Metodo para no mostrar el icono de borrar una imagen
function iconoBorrarFalse() {
	if (imagenPreview.value) {
		mostrarIconoBorrar.value = false;
	}
}
//Variable reactiva para mostrar la imagen capturada
const imagenPreview = ref(null);
//Metodo para seleccionar una imagen para el registro
const seleccionarArchivo = () => {
	if (mostrarIconoBorrar.value == false) {
		inputImagen.value.click();
	} else {
		limpiarImagen();
	}
};
//Variable reactiva para caputar el valor de la imagen
const inputImagen = ref(null);
//Metodo para cambiar la imagen de un registro
const cambiarImagen = () => {
	const input = inputImagen.value;
	const file = input.files;
	if (file && file[0]) {
		form.value.imagen_enlace = file[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			imagenPreview.value = e.target.result;
		};
		reader.readAsDataURL(file[0]);
		return file[0];
	}
};

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
	id_enlace_amigo: "",
	titulo_enlace: "",
	enlace_amigo: "",
	descripcion_enlace: "",
	visibilidad_enlace: false,
});

//Función para limpiar todos los campos del form
function limpiarForm() {
	//Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
	form.value.id_enlace_amigo = "";
	form.value.titulo_enlace = "";
	form.value.enlace_amigo = "";
	form.value.descripcion_enlace = "";
	form.value.visibilidad_enlace = false;
	limpiarImagen();
}

//Metodo para limpiar el campo de la imagen
function limpiarImagen() {
	//Limpiar imagen
	inputImagen.value.value = "";
	imagenPreview.value = null;
	form.value.imagen_enlace = "";
	mostrarIconoBorrar.value = false;
}

//Funciones para manejo del modal
//Toast del sweetalert
const TOAST = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (TOAST) => {
		TOAST.addEventListener("mouseenter", Swal.stopTimer);
		TOAST.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
	formAccion = accion;
}

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
	if (formAccion == "crear") {
		crearEnlace();
	} else {
		actualizarEnlace();
	}
}

//Metodo para agregar un nuevo enlace
async function crearEnlace() {
	//Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
	token.value = localStorage.getItem("token");
	if (validarTitulo()) {
		try {
			const FORMDATA = new FormData();
			FORMDATA.append("titulo_enlace", form.value.titulo_enlace);
			FORMDATA.append("enlace_amigo", form.value.enlace_amigo);
			FORMDATA.append("descripcion_enlace", form.value.descripcion_enlace);
			FORMDATA.append("visibilidad_enlace", form.value.visibilidad_enlace ? 1 : 0);
			FORMDATA.append("imagen_enlace", form.value.imagen_enlace);
			//Se realiza la petición axios mandando la ruta y el formData
			await axios
				.post("/enlaces_amigos", FORMDATA, {
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${token.value}`,
					},
				})
				.then((res) => {
					//Se reinicia el timer
					window.dispatchEvent(EVENT);
					//Se actualiza el token con la respuesta del axios
					localStorage.setItem("token", res.data.data.token);
					token.value = localStorage.getItem("token");
				});
			//Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
			await props.actualizar_datos();

			document.getElementById("closeModal").click();
			// props.actualizar_datos();
			TOAST.fire({
				icon: "success",
				title: "Enlace creado exitosamente",
			});
			limpiarForm();
		} catch (error) {
			console.log(error);
			const MENSAJE_ERROR = error.response.data.message;
			if (error.response.status == 401) {
				navigateTo("/error_401");
			} else {
				if (!error.response.data.errors) {
					//Se extrae el sqlstate (identificador de acciones SQL)
					const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
					//Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
					const RES = validaciones.mensajeSqlState(SQL_STATE);

					//Se muestra un sweetalert con el mensaje
					Swal.fire({
						icon: "error",
						title: "Error",
						text: RES,
						confirmButtonColor: "#3F4280",
					});
				} else {
					//Se muestra un sweetalert con el mensaje
					Swal.fire({
						icon: "error",
						title: "Error",
						text: MENSAJE_ERROR,
						confirmButtonColor: "#3F4280",
					});
				}
			}
		}
	}
}

//Metodo para configurar el modal y enviar el id
async function estadoActualizar(id) {
	await leerUnEnlace(id);
	const MODAL_ID = document.getElementById("staticModal");
	const CERRAR_BOTON = document.getElementById("closeModal");
	const TITULO_MODAL = document.getElementById("modalText");
	const OPCIONES_MODAL = {
		backdrop: "static",
		backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
	};
	const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
	TITULO_MODAL.textContent = "Editar";
	MODAL.show();
	accionForm("actualizar");
	document.getElementById("btnModalAdd").classList.add("hidden");
	document.getElementById("btnModalUpdate").classList.remove("hidden");
	CERRAR_BOTON.addEventListener("click", function () {
		MODAL.hide();
		limpiarForm();
	});
}

//Metodo para capturar el id del enlace y buscar la respectiva informacion
async function leerUnEnlace(id) {
	//Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
	token.value = localStorage.getItem("token");
	try {
		await axios
			.get("/enlaces_amigos/" + id, {
				headers: {
					Authorization: `Bearer ${token.value}`,
				},
			})
			.then((res) => {
				form.value = {
					id_enlace_amigo: res.data.data.id,
					titulo_enlace: res.data.data.campos.titulo_enlace,
					enlace_amigo: res.data.data.campos.enlace_amigo,
					descripcion_enlace: res.data.data.campos.descripcion_enlace,
					//Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
					visibilidad_enlace: res.data.data.campos.visibilidad_enlace ? true : false,
				};
				if (res.data.data.campos.imagen_enlace != null) {
					form.value.imagen_enlace = res.data.data.campos.imagen_enlace;
					imagenPreview.value = api_url + form.value.imagen_enlace;
				} else {
					form.value.imagen_enlace = "";
				}
				//Se reinicia el timer
				window.dispatchEvent(EVENT);
				//Se actualiza el token con la respuesta del axios
				localStorage.setItem("token", res.data.token);
				token.value = localStorage.getItem("token");
			});
	} catch (error) {
		console.log(error);
		const MENSAJE_ERROR = error.response.data.message;
		if (error.response.status == 401) {
			navigateTo("/error_401");
		} else {
			if (!error.response.data.errors) {
				//Se extrae el sqlstate (identificador de acciones SQL)
				const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
				//Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
				const RES = validaciones.mensajeSqlState(SQL_STATE);

				//Se muestra un sweetalert con el mensaje
				Swal.fire({
					icon: "error",
					title: "Error",
					text: RES,
					confirmButtonColor: "#3F4280",
				});
			} else {
				//Se muestra un sweetalert con el mensaje
				Swal.fire({
					icon: "error",
					title: "Error",
					text: MENSAJE_ERROR,
					confirmButtonColor: "#3F4280",
				});
			}
		}
	}
}

//Metodo para actualizar la informacion de un enlace
async function actualizarEnlace() {
	//Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
	token.value = localStorage.getItem("token");
	if (validarTitulo()) {
		try {
			var id = form.value.id_enlace_amigo;
			const FORMDATA = new FormData();
			FORMDATA.append("titulo_enlace", form.value.titulo_enlace);
			FORMDATA.append("enlace_amigo", form.value.enlace_amigo);
			FORMDATA.append("descripcion_enlace", form.value.descripcion_enlace);
			FORMDATA.append("visibilidad_enlace", form.value.visibilidad_enlace ? 1 : 0);
			FORMDATA.append("imagen_enlace", form.value.imagen_enlace);
			await axios
				.post("/enlaces_amigos_update/" + id, FORMDATA, {
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${token.value}`,
					},
				})
				.then((res) => {
					//Se reinicia el timer
					window.dispatchEvent(EVENT);
					//Se actualiza el token con la respuesta del axios
					localStorage.setItem("token", res.data.data.token);
					token.value = localStorage.getItem("token");
				});

			//Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
			await props.actualizar_datos();

			document.getElementById("closeModal").click();
			// props.actualizar_datos();
			TOAST.fire({
				icon: "success",
				title: "Enlace actualizado exitosamente",
			});
		} catch (error) {
			console.log(error);
			const MENSAJE_ERROR = error.response.data.message;
			if (error.response.status == 401) {
				navigateTo("/error_401");
			} else {
				if (!error.response.data.errors) {
					//Se extrae el sqlstate (identificador de acciones SQL)
					const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
					//Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
					const RES = validaciones.mensajeSqlState(SQL_STATE);

					//Se muestra un sweetalert con el mensaje
					Swal.fire({
						icon: "error",
						title: "Error",
						text: RES,
						confirmButtonColor: "#3F4280",
					});
				} else {
					//Se muestra un sweetalert con el mensaje
					Swal.fire({
						icon: "error",
						title: "Error",
						text: MENSAJE_ERROR,
						confirmButtonColor: "#3F4280",
					});
				}
			}
		}
	}
}

//Codigo para cambiar el estado del enlace a inactivo
async function borrarEnlace(id) {
	Swal.fire({
		title: "Confirmación",
		text: "¿Desea ocultar el registro?",
		icon: "warning",
		reverseButtons: true,
		showCancelButton: true,
		confirmButtonColor: "#3F4280",
		cancelButtonColor: "#d33",
		confirmButtonText: "Confirmar",
		allowOutsideClick: false,
		cancelButtonText: "Cancelar",
	}).then(async (result) => {
		if (result.isConfirmed) {
			try {
				//Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
				token.value = localStorage.getItem("token");
				try {
					//Se realiza la petición axios
					await axios
						.delete("/enlaces_amigos/" + id, {
							headers: {
								Authorization: `Bearer ${token.value}`,
							},
						})
						.then((res) => {
							//Se reinicia el timer
							window.dispatchEvent(EVENT);
							//Se actualiza el token con la respuesta del axios
							localStorage.setItem("token", res.data.data.token);
							token.value = localStorage.getItem("token");

							//Se lanza la alerta de éxito
							TOAST.fire({
								icon: "success",
								title: "Enlace ocultado exitosamente",
							});
						});
					//Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
					await props.actualizar_datos();
				} catch (error) {
					console.log(error);
				}
			} catch (error) {
				console.log(error);
				const MENSAJE_ERROR = error.response.data.message;
				if (error.response.status == 401) {
					navigateTo("/error_401");
				} else {
					if (!error.response.data.errors) {
						//Se extrae el sqlstate (identificador de acciones SQL)
						const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
						//Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
						const RES = validaciones.mensajeSqlState(SQL_STATE);

						//Se muestra un sweetalert con el mensaje
						Swal.fire({
							icon: "error",
							title: "Error",
							text: RES,
							confirmButtonColor: "#3F4280",
						});
					} else {
						//Se muestra un sweetalert con el mensaje
						Swal.fire({
							icon: "error",
							title: "Error",
							text: MENSAJE_ERROR,
							confirmButtonColor: "#3F4280",
						});
					}
				}
			}
		}
	});
}

//Función para cambiar un enlace a activo
async function recuperarUnEnlace(id) {
	Swal.fire({
		title: "Confirmación",
		text: "¿Desea recuperar el registro?",
		icon: "warning",
		reverseButtons: true,
		showCancelButton: true,
		confirmButtonColor: "#3F4280",
		cancelButtonColor: "#d33",
		confirmButtonText: "Confirmar",
		cancelButtonText: "Cancelar",
		allowOutsideClick: false,
	}).then(async (result) => {
		if (result.isConfirmed) {
			try {
				//Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
				token.value = localStorage.getItem("token");
				try {
					//Se realiza la petición axios
					await axios
						.delete("/enlaces_amigos/" + id, {
							headers: {
								Authorization: `Bearer ${token.value}`,
							},
						})
						.then((res) => {
							//Se reinicia el timer
							window.dispatchEvent(EVENT);
							//Se actualiza el valor del token con la respuesta del axios
							localStorage.setItem("token", res.data.data.token);
							token.value = localStorage.getItem("token");
						});

					//Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
					await props.actualizar_datos();

					//Se lanza la alerta de éxito
					TOAST.fire({
						icon: "success",
						title: "Enlace recuperado exitosamente",
					});
				} catch (error) {
					console.log(error);
				}
			} catch (error) {
				console.log(error);
				const MENSAJE_ERROR = error.response.data.message;
				if (error.response.status == 401) {
					navigateTo("/error_401");
				} else {
					if (!error.response.data.errors) {
						//Se extrae el sqlstate (identificador de acciones SQL)
						const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
						//Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
						const RES = validaciones.mensajeSqlState(SQL_STATE);

						//Se muestra un sweetalert con el mensaje
						Swal.fire({
							icon: "error",
							title: "Error",
							text: RES,
							confirmButtonColor: "#3F4280",
						});
					} else {
						//Se muestra un sweetalert con el mensaje
						Swal.fire({
							icon: "error",
							title: "Error",
							text: MENSAJE_ERROR,
							confirmButtonColor: "#3F4280",
						});
					}
				}
			}
		}
	});
}
const visible_ref = ref(false);
const index_ref = ref(0);
const imgs_ref = ref([]);

function abrirLightBox() {
	visible_ref.value = true;
}

function mostrarLightBox(url) {
	imgs_ref.value = url;
	abrirLightBox();
}

function esconderLightBox() {
	visible_ref.value = false;
}

//Validaciones
function validarTitulo() {
	var res = validaciones.validarSoloLetrasYNumeros(form.value.titulo_enlace);
	return res;
}
</script>
