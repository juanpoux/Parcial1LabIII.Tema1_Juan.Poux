export const validarCampoVacio = (e) => {
    const input = e.target;
    const value = input.value.trim();

    value ? clearError(input) : setError(input, "Campo requerido");
};

const clearError = (input, mensaje) => {
    const $small = input.nextElementSibling;
    $small.textContent = "";
    input.classList.remove("inputError");
    $small.classList.remove("danger");
};

const setError = (input, mensaje) => {
    const $small = input.nextElementSibling;
    $small.textContent = mensaje || `${input.name} requerido`;
    input.classList.add("inputError");
    $small.classList.add("danger");
    input.classList.remove("inputOk");
};

export function agregarErrorAControles(form) {
    const controles = form.elements;
    for (const control of controles) {
        if (control.matches("[type=text]") || control.matches("[type=number]"))
            control.value
                ? clearError(control)
                : setError(control, "Campo requerido");
    }
}

export function validarForm(form) {
    const controles = form.elements;
    for (const control of controles) {
        if (
            control.matches("[type=text]") &&
            (control.classList.contains("inputError") ||
                control.value.length < 1)
        ) {
            console.log(control.value.length);
            console.log("Hay que llenar los campos");
            return false;
        }
    }
    return true;
}

export const validarNumero = (e) => {
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero > -1) clearError(input);
    else setError(input, "Ingrese un numero, mayor o igual a 0");
};

export const validarPuertas = (e) => {
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero > 1 && numero < 6) clearError(input);
    else setError(input, "Ingrese un numero entre 2 y 5");
};

export const validarPotencia = (e) => {
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero > 49 && numero < 301) clearError(input);
    else setError(input, "Ingrese un numero entre 50 y 300");
};

export const validarKms = (e) => {
    const input = e.target;
    const numero = parseInt(input.value.trim());
    if (numero > -1 && numero < 200001) clearError(input);
    else setError(input, "Ingrese un numero entre 0 y 200000");
};
