const fs = require ('fs');
const dir = './database/';

const guardar08 = (data, archivo) =>{
    const patch = dir + archivo+'.json'
    fs.writeFileSync( path, JSON.stringify(data));

}

const leerDB = (archivo) => {
    const path = dir + archivo+'json'
    if( !fs.existsSync(path)){
        return null;
    }
    const info = fs.readFileSync(path, { encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}