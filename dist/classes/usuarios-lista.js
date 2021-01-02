"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    // Agregar un nuevo usuarui
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    // Actualizar nombre
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id == id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('::::::: Actualizando usuario :::::::');
        console.log(this.lista);
    }
    // Obtener lista de usuarios
    getLista() {
        return this.lista.filter(usuario => usuario.nombre !== 'sin-nombre');
    }
    //Optener usuario
    getUsuario(id) {
        return this.lista.find(usuario => usuario.id == id);
    }
    // optener usuarios de una sala
    getSala(sala) {
        return this.lista.filter(usuario => usuario.sala == sala);
    }
    // Borrar un usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;
