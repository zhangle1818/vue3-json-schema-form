const Ajv = require('ajv').default
const localize = require("ajv-i18n")

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 10,
            errorMessage: {
                type: '必须是字符串',
                test: '自定义关键字验证 test 失败了',
                minLength: '长度不能小于10'
            }
            // test: true,
            // format: 'test'
        },
        age: {
            type: 'number',
        },
        pets: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        isWorker: {
            type: 'boolean',
        },
    },
    required: ['name', 'age'],
}
const ajv = new Ajv({ allErrors: true, jsonPointers: true }) // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv)
// ajv.addFormat('test', (data) => {
//     console.log(data, '--------')
//     return data === 'haha'
// })
ajv.addKeyword({
    keyword: 'test',
    validate: function foo(schema, data) {
        foo.errors = [
            {
                keyword: 'test',
                dataPath: '/name',
                schemaPath: '#/properties/name/test',
                params: {},
                message: 'hhhh'
            }
        ]
        // if (schema === true) return true
        // else return schema.length === 6
        return false
    },
    // compile(sch, parentSchema) {
    //     console.log(sch, parentSchema)
    //     return () => true
    // },
    // metaSchema: {
    //     type: 'string'
    // },
    // macro(schema, parentSchema) {
    //     return {
    //         minLength: 10,
    //     }
    // },
    errors: false
})
const validate = ajv.compile(schema)
const valid = validate({
    name: '1231',
    age: 18,
    pets: ['mini', 'mama'],
    isWorker: true,
})
if (!valid) {
    localize.zh(validate.errors)
    console.log(validate.errors)
}
