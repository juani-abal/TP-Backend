const { check } = require('express-validator');

module.exports = [
    check('email')
        .exists().withMessage('El email es un campo requerido.')
        .notEmpty().withMessage('El email no puede estar vacio')
        .custom((value) => value.includes('@') && value.includes('.com')).withMessage('El email ingresado no es valido.'),
        
    check('password')
        .exists().withMessage('El password es un campo requerido.')
        .notEmpty().withMessage('El password no puede estar vacio')
];
