
import { Usuario } from './usuario';


export class UsuariosLista {
	
	private lista: Usuario[] = [];


	constructor(){

	}


	// Agregar un nuevo usuarui
	public agregar( usuario: Usuario ) {

		this.lista.push( usuario );
		console.log(this.lista);

		return usuario;
	}

	// Actualizar nombre
	public actualizarNombre(id: string, nombre: string ){

		for (let usuario of this.lista) {
			
			if( usuario.id == id ){
				usuario.nombre = nombre;
				break;
			}

		}

		console.log('::::::: Actualizando usuario :::::::');
		console.log( this.lista ); 
	}


	// Obtener lista de usuarios
	public getLista(){

		return this.lista.filter( usuario => usuario.nombre !== 'sin-nombre' );
		
	}


	//Optener usuario
	public getUsuario( id: string ){
		return this.lista.find( usuario => usuario.id == id);
	}


	// optener usuarios de una sala
	public getSala( sala: String ){
		return this.lista.filter( usuario => usuario.sala == sala);
	}


	// Borrar un usuario
	public borrarUsuario( id: string ){
		const tempUsuario = this.getUsuario( id );

		this.lista = this.lista.filter( usuario => usuario.id !== id );

		return tempUsuario;

	}





}