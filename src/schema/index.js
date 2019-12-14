const { resolve } = require('path');
const fs = require('fs');
const TJS = require('typescript-json-schema');
// 读取当前文件夹下所有的文件
let files = fs.readdirSync(resolve(__dirname, './'));
files = files.filter(file => file.endsWith('.ts')).map(file => resolve(__dirname, file));
const program = TJS.getProgramFromFiles(files, {});
// generateSchema 1. program 2.需要获取schema的接口名(*代表所有)
const schemas = TJS.generateSchema(program, '*', {
    required: true,
    ref: true,
    id: ''
});

let formattedSchemas = schemas.definitions;

formattedSchemas = Object.keys(formattedSchemas).map(key => {
    const definition = formattedSchemas[key];
    definition.$name = key;
    if (definition.items) {
        let $ref = definition.items.$ref;
        let keys = $ref.split('/').slice(2);
        let dep = formattedSchemas;
        keys.forEach(key => {
            dep = dep[key]
        })
        definition.items = dep;
    }
    return definition;
})

module.exports = formattedSchemas;






