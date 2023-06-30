//Archivo para almacenar todas las validaciones y poder usarlas en todo el proyecto

//Se crea una constante para guardar todas las funciones
const validaciones = {
    //Función para validar que un dado número (parámetro "numero") sea mayor a 0 y que no exceda a un número máximo especificado (parámetro "numeroMax")
    validarNoNumerosNegativos(numero, numeroMax) {
        //Si el número es menor a 1 o mayor al número máximo, la función retorna false
        if (numero < 1 || numero > numeroMax) {
            return false;
        } else {
            //De lo contrario, la función retorna true
            return true;
        }
    },
    //Esta función valida si un texto dado contiene solo letras y números
    validarSoloLetrasYNumeros(texto) {
        //Se valida que el texto no sea nulo
        if (texto != null && texto.trim() != "") {
            //Se valida que en la cadena de texto solo existan letras, números, espacios y caracteres de separación (/ | -)
            var re = /^[a-zA-Z0-9\s/|\-,.]+$/;
            //Retorna false o true dependiendo de si cumple o no la condición
            return re.test(texto);
        } else {
            //Retorna true si el texto es nulo porque si no aparecería la alerta de error aunque no haya ningún texto en el input
            return true;
        }
    },
    //Evalua el sqlstate (identificador de acciones SQL) por si axios retorna un error, así se le puede enviar un mensaje personalizado al usuario
    mensajeSqlState(error) {
        //Se colocan los posibles códigos de error y su mensaje a retornar
        if (error === '23000') {
            return 'Violación de restricción de unicidad/integridad.';
        } else {
            return 'Error en la base de datos.';
        }
    },
    //Función para extraer el sqlstate del error completo que retorna axios
    extraerSqlState(error) {
        //Se hace un filtro que busca el texto que viene después del sqlstate para así extraer solo el código
        const re = /SQLSTATE\[(\w+)\]/;
        //Se hace una revisión con el filtro y el mensaje de error recibido
        const revision = error.match(re);
        //Se retorna solo el código de error
        if (revision && revision.length > 1) {
            return revision[1];
        } else {
            return null;
        }
    },
    //Función para convertir números enteros a decimales (recibe el número a convertir y cuantos digitos quiere poner despues del punto)
    convertirDecimales(numero, digitospunto) {
        //Se evalua si la cantidad es un número o no
        if (isNaN(numero)) {
            return false;
        } else {
            //Se convierte a decimal con el número de digitos indicado
            var numero_decimal = Number.parseFloat(numero).toFixed(digitospunto);
            return numero_decimal;
        }
    },
    //Función para validar inputs tipo date (recibe la cantidad de días y meses a agregar/restar)
    validarFecha(dias, meses, anios) {
        //Fecha actual
        var fecha_actual = new Date();

        //Fechas minima y máxima, además de cambiar el formato de las fechas
        var fecha_minima = new Date(fecha_actual.getFullYear() - anios, fecha_actual.getMonth() - meses, fecha_actual.getDate() - dias);
        var fecha_maxima = new Date(fecha_actual.getFullYear() + anios, fecha_actual.getMonth() + meses, fecha_actual.getDate() + dias);

        //ISO String es un método de js que devuelve las fechas en el formato YYYY-MM-DD::mm:ss (mm:ss simbolizando minutos y segundos)
        /*Entonces se usa el ISO String para cambiar el formato de la fecha, además usando el split T se separa el tiempo de la fecha y se toma la posición [0] 
        (sería la que esta antes del tiempo, es decir, solo la fecha) para devolver la fecha sola*/
        var fecha_min_string = fecha_minima.toISOString().split('T')[0];
        var fecha_max_string = fecha_maxima.toISOString().split('T')[0];

        return {
            min: fecha_min_string,
            max: fecha_max_string
        }
    },
    //Función para validar que los usuarios solo lleven caracteres alfanuméricos y guión bajo
    validarUsuario(texto) {
        //Se valida que el texto no sea nulo
        if (texto != null && texto.trim() != "") {
            //Se valida que en la cadena de texto solo existan letras, números y guión bajo
            var re = /^[a-zA-Z0-9\s_]+$/;
            //Retorna false o true dependiendo de si cumple o no la condición
            return re.test(texto);
        } else {
            //Retorna true si el texto es nulo porque si no aparecería la alerta de error aunque no haya ningún texto en el input
            return true;
        }
    },
    //Función para validar que una cadena de texto solo lleve letras
    validarSoloLetras(texto) {
        //Se valida que el texto no sea nulo
        if (texto != null && texto.trim() != "") {
            //Se valida que en la cadena de texto solo existan letras
            var re = /^[a-zA-Z\s/]+$/;
            //Retorna false o true dependiendo de si cumple o no la condición
            return re.test(texto);
        } else {
            //Retorna true si el texto es nulo porque si no aparecería la alerta de error aunque no haya ningún texto en el input
            return true;
        }
    },
    validarNumeroTelefono(numero) {
        if (numero != null && numero.trim() != "") {
            // Validar el formato del número de teléfono
            var re = /^\d{4}-\d{4}$/;

            // Verificar si el número cumple con el formato
            if (re.test(numero)) {
                // El número tiene un formato válido
                return true;
            } else {
                // El número tiene un formato inválido
                return false;
            }
        } else {
            return true;
        }
    },
    validarNumeroDocumento(texto, tipo) {
        if (texto != null && texto.trim() != "") {
            switch (tipo) {
                case "Cédula":
                    var reCedula = /^[PENI]{1,2}[a-zA-Z0-9-]{5,}$/;
                    return reCedula.test(texto);
                    break;
                case "Pasaporte":
                    var rePasaporte = /^[A-Za-z]{2}[A-Za-z0-9\-]{7,10}$/;
                    return rePasaporte.test(texto);
                    break;
                default:
                    var reGeneral = /^[a-zA-Z0-9\-]+$/;
                    return reGeneral.test(texto);
            }
        } else {
            return true; 
        }
    }
};

export default validaciones;