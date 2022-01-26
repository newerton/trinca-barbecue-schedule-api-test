import { LanguageMessages } from 'joi';

const joiMessages = (): LanguageMessages => {
  return {
    'any.required': '{#label} é obrigatório',
    'date.base': '{#label} deve ser uma data válida',
    'date.format': '{#label} está incorreta, o formato é {#format}.',
    'number.min': '{#label} deve ter no mínimo {#limit} números',
    'number.max': '{#label} deve ter no máximo {#limit} números {#value}',
    'number.greater': '{#label} deve ser maior que {#limit} números',
    'number.less': '{#label} deve ser menor que {#limit} números {#value}',
    'number.negative': '{#label} deve ser um número menor que 0(zero)',
    'number.positive': '{#label} deve ser um número maior que 0(zero)',
    'postalCode.invalid': '{#label} inválido',
    'string.base': '{#label} inválida',
    'string.empty': '{#label} não pode ser vazio',
    'string.guid': '{#label} não existe',
    'string.length': '{#label} deve ter {#limit} caracteres',
    'string.creditCard': '{#label} inválido',
    'string.min': '{#label} deve ter no mínimo {#limit} caracteres',
    'string.max': '{#label} deve ter no máximo {#limit} caracteres',
    'string.pattern.base': '{#label} inválido',
  };
};

export default joiMessages();
