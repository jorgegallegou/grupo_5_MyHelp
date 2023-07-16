const fs = require('fs');

const User = {

  //Lectura del json y devolución de contenido como un objeto
  fileName: './src/dataBase/users.json',
  getData: function() {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
  },

  //Método para generar un ID
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
        return lastUser.id + 1;
    } 
    return 1;    
  },

  //Método buscar todos los usuarios
  findAll: function () {
    return this.getData();
  },

  //Método buscar un usuario por ID
  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound;
  },

  //Método buscar usuario por email
  findByEmail: function (email) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.email === email);
    return userFound;
  },

 //Método buscar usuario por cualquier campo
  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
  },

  //Método crear usuario
  create: function(userData) {
    let allUsers = this.findAll();
    let newUser = {
        id: this.generateId(),
        ...userData
    }
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    return newUser
  },

  //Método eliminar usuario
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
    return true;
  }
}

module.exports = User