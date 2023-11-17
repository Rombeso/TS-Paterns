/* Необходимо сделать тип для результатов валидации
    формы, основываясь на типе формы
 */

interface IForm {
    name: string;
    password: string;
}

const from: IForm =  {
    name: 'Вася',
    password: '123'
}

const formValidation: TypeFormatValidation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMassage: 'Должен быть длинее 5 символов'}
}

type TypeFormatValidation<T> = {
    [key in keyof T]: {isValid: true} | {isValid: false, errorMassage: string}
}

type formType = TypeFormatValidation<IForm>