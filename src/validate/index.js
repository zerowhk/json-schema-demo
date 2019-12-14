const Ajv = require('ajv');
const ajv = new Ajv({
    allErrors: true,
    removeAdditional: true
});

const warpValidate = (schema) => {
    let validate = ajv.compile(schema);
    return (data) => {
        let vaild = validate(data);
        return vaild ? { valid: true } : { valid: false, errorsText: ajv.errorsText(validate.errors)}
    }
}
module.exports = warpValidate;