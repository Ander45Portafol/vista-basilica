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
            var re = /^[a-zA-Z0-9\s/|\-]+$/;
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
        }else{
            return null;
        }
    }

};

export default validaciones;