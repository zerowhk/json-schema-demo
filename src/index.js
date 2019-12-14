const schemas = require('./schema')
const validate = require('./validate')

let models = schemas.reduce((res, schema) => {
    res[schema.$name] = {
        name: schema.$name,
        schema: schema,
        validate: validate(schema)
    }
    return res;
}, {});

module.exports = models;