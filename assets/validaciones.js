const validaciones = {
    validarNoNumerosNegativos(numero, numeroMax) {
        if (numero < 1 || numero > numeroMax) {
            return false;
        }else{
            return true;
        }
    },
    validarSoloLetrasYNumeros(texto){
        if(texto.trim() != ''){
            var re = /^[a-zA-Z0-9]+$/;

            return re.test(texto);
        }else{
            return true;
        }
    },

};

export default validaciones;