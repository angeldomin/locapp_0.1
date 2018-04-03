export class Usuario {
    constructor( 
        public _id: string,
        public nombre: string,
        public apellido1: string,
        public apellido2: string,
        public edad: number,
        public id_dispositivo: string
    ) {}
}