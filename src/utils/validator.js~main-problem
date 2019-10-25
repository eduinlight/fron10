//THIS SCRIPT IT WAS CREATED BY EDUIN GARCIA CORDERO
//IS A DATA VALIDATOR LIBRARY USING THE FUNCTIONS PROVIDED BY string-validator
//YOU CAN USE THIS CODE AND DO WHEREVER YOU WANTED WITH IT

//string validator rules
import * as sv from 'string-validator'
//schema format
//{schemaKey: [rule1, {rule: rule2}, {rule: rule3, params: [p1, p2], message: "custom_message"} ] }

let defaults = {
  rules: {
    equals: {
      cantParams: 1,
      message: 'the text is not equal to %p1',
      fn: sv.equals
    },
    contains: {
      cantParams: 1,
      message: 'the text must contain %p1',
      fn: sv.contains
    },
    matches: {
      cantParams: 1,
      message: 'the text do not match with $p1',
      fn: sv.matches
    },
    email: {
      cantParams: 0,
      message: 'the email is incorrect',
      fn: sv.isEmail
    },
    url: {
      cantParams: 0,
      message: 'the url is incorrect',
      fn: sv.isURL
    },
    ip: {
      cantParams: 0,
      message: 'the ip address is incorrect',
      fn: sv.isIP
    },
    alpha: {
      cantParams: 0,
      message: 'only english alphabet letters',
      fn: sv.isAlpha
    },
    numeric: {
      cantParams: 0,
      message: 'the number is incorrect',
      fn: sv.isNumeric
    },
    alpha_numeric: {
      cantParams: 0,
      message: 'only english alphabet letters and/or numbers',
      fn: sv.isAlphanumeric
    },
    base64: {
      cantParams: 0,
      message: 'incorrect base64 code',
      fn: sv.isBase64
    },
    hexadecimal: {
      cantParams: 0,
      message: 'only hexadecimal',
      fn: sv.isHexadecimal
    },
    hexcolor: {
      cantParams: 0,
      message: 'only a hexadecimal color format',
      fn: sv.isHexColor
    },
    lowercase: {
      cantParams: 0,
      message: 'only lowercase characters',
      fn: sv.isLowercase
    },
    uppercase: {
      cantParams: 0,
      message: 'only uppercase characters',
      fn: sv.isUppercase
    },
    int: {
      cantParams: 0,
      message: 'only an integer number',
      fn: sv.isInt
    },
    float: {
      cantParams: 0,
      message: 'only a float number',
      fn: () => (v) => sv.isFloat(v, { locale: 'en-US' })
    },
    divisibleBy: {
      cantParams: 1,
      message: 'number is not divisible by %p1',
      fn: sv.isDivisibleBy
    },
    required: {
      cantParams: 0,
      message: 'required',
      fn: () => (v) => v !== undefined && v !== null && v !== ''
    },
    boolean: {
      cantParams: 0,
      message: 'only a boolean value',
      fn: () => (v) => v == 'true' || v == 'false' || v == '1' || v == '0'
    },
    minLength: {
      cantParams: 1,
      message: 'the text length is not equal to %p1',
      fn: sv.isLength
    },
    maxLength: {
      cantParams: 1,
      message: 'the text length is not greater than %p1',
      fn: v => sv.isLength(0, v)
    },
    date: {
      cantParams: 0,
      message: 'wrong date',
      fn: sv.isDate
    },
    afterDate: {
      cantParams: 1,
      message: '',
      fn: sv.isAfter
    },
    beforeDate: {
      cantParams: 1,
      message: 'only dates before %p1',
      fn: sv.isBefore
    },
    in: {
      cantParams: 1,
      message: 'the value must be one of %p1',
      fn: sv.isIn
    },
    creditCard: {
      cantParams: 0,
      message: 'wrong credit card',
      fn: sv.isCreditCard
    },
    json: {
      cantParams: 0,
      message: 'only json format supported',
      fn: sv.isJSON
    },
    ascii: {
      cantParams: 0,
      message: 'only ascii code characters',
      fn: sv.isAscii
    },
    gender: {
      cantParams: 0,
      message: 'the sex is not one of [M, F, O]',
      fn: () => (v) => {
        return v == 'F' || v == 'M' || v == 'G'
      }
    },
    max: {
      cantParams: 1,
      message: 'max value %p1',
      fn: (p1) => (v) => {
        return v <= p1
      }
    },
    min: {
      cantParams: 1,
      message: 'min value %p1',
      fn: (p1) => (v) => {
        return v >= p1
      }
    },
    validInterval: {
      cantParams: 0,
      message: 'invalid interval value is one of:  [daily, weekly, monthly, yearly]',
      fn: (p1) => (v) => {
        return v == 'daily' || v == 'weekly' || v == 'monthly' || v == 'yearly'
      }
    },
  }
}


export default class Validator {

  /**
   * Evaluate an object with the specific schema for validation
   * @param schema the schema object
   * @param data the data to be evaluated
   * @returns an object that represent the evaluation.
   */
  static validate = (schema, data) => {
    let response = { valid: true, errors: {}, values: {} }

    Object.keys(schema).forEach(schemaKey => {
      let rules = schema[schemaKey]

      response.values[schemaKey] = data[schemaKey]

      rules.forEach(rule => {
        //definición de la regla
        let newRule = {}
        if (typeof (rule) == "string") {
          newRule = defaults.rules[rule]
        } else if (typeof (rule) == "object") {
          newRule = defaults.rules[rule.rule]

          if (newRule.cantParams > 0 && rule.params) {
            newRule.params = rule.params
          }

          if (rule.message) {
            newRule.message = rule.message
          }
        }

        let paramsFunction = []
        if (newRule.cantParams > 0) {
          paramsFunction = newRule.params
        }

        if (
          (
            (
              rule != 'required'
              && data[schemaKey] !== undefined
            )
            || rule == 'required'
          )
          && !newRule.fn(...paramsFunction)(data[schemaKey])
        ) {
          response.valid = false

          //replacing message params
          paramsFunction.forEach((param, i) => {
            newRule.message = newRule.message.replace(new RegExp('\%p' + (i + 1), 'g'), param)
          })
          response.errors[schemaKey] = newRule.message

        }
      });
    })
    return response
  }
}
