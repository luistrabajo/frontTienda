import Item from './productoCotizacionDTO';


export default interface Cotizacion{

    cotizacion_id?: number;
    nombre_cliente?: string;
    numero_telefono?:number;
    fecha_creacion?:  any;
    valor_total?:    number;
    descripcion?:    Item[]
    
}