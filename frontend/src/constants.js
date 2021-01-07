const REGEXP = {
    DNI: /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
    NAME: /^[a-z ,.'-]+$/i,
    TELEPHONE: /((?<=^00|\+)34([6798])\d{8}$)|([6798])\d{8}$/,
    CAR_REGISTRATION: /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/,
    IS_NUMBER: /^[0-9]+$/,
};
const SUCCESS = 'success';
const ERROR = 'error';

// ↑ En un futuro no será necesario, se cargará desde el servidor.

/* 
const numero1 = 250;
const numero2 = 25;
const numero3 = 2;

const options = {
    true: 'CORRECTO',
    false: 'INCORRECTO'
};
console.log('isnumber: ',options[REGEXP.IS_NUMBER.test(numero1)]);
console.log('isnumber: ',options[REGEXP.IS_NUMBER.test(numero2)]);
console.log('isnumber: ',options[REGEXP.IS_NUMBER.test(numero3)]); */