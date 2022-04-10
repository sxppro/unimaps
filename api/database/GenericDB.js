const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

class GenericDB{
    constructor(filename){
        this.filename = filename;
        const content = fs.readFileSync(this.filename, {encoding:'utf8', flag:'r'});
        this.data = JSON.parse(content);
    }

    getObject(id){
        return this.data[id];
    }

    save(object){
        if(typeof object.id !== 'string'){
            object.id =  this._genUuid();
        }
        this.data[object.id] = object;
        this._saveDataToFile();
        return object.id;
    }

    _genUuid(){
        let id = uuidv4().toString();
        while(this.data.hasOwnProperty(id)){
            id = uuidv4().toString();
        }
        return id;
    }

    delete(id){
        let dataExists = !!this.data[id];
        delete this.data[id];
        this._saveDataToFile();
        return dataExists;
    }

    _saveDataToFile(){
        const content = JSON.stringify(this.data, null, 4);
        fs.writeFileSync(this.filename, content);
    }
}

module.exports = {GenericDB};