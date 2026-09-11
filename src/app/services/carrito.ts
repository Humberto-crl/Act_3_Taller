import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {

    private carritoSubject = new BehaviorSubject<Product[]>([]);

    readonly carrito$ = this.carritoSubject.asObservable();

    private carrito: Product[] = [];

    constructor() {}


    agregarProducto(producto: Product) {
        const productoExistente = this.carrito.find(p => p.id === producto.id);

        if (productoExistente) {

            productoExistente.cantidad++;
        }else {

            this.carrito.push({...producto, cantidad: 1});
        }

        this.carritoSubject.next([...this.carrito]);
    }

    actualizarCantidad(id: number, cantidad: number): void {

        const producto = this.carrito.find(
            p => p.id === id
        );

        if (producto) {

            if (cantidad <= 0) {

                this.eliminarProducto(id);

            } else {

                producto.cantidad = cantidad;
                this.carritoSubject.next([...this.carrito]);

            }

        }

    }

    eliminarProducto(id: number): void {

        this.carrito = this.carrito.filter(
            p => p.id !== id
        );

        this.carritoSubject.next([...this.carrito]);

    }
}
