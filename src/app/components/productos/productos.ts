import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CarritoService } from '../../services/carrito';


@Component({
  selector: 'app-productos',
  standalone: false,
  styleUrls: ['./productos.scss'],
  templateUrl: './productos.html',
})
export class ProductosComponent {
  
  productos: Product[] = [
    {
      id: 1,
      nombre: 'Mouse',
      precio: 100,
      cantidad: 1
    },
    {
      id: 2,
      nombre: 'Teclado',
      precio: 150,
      cantidad: 1
    },
    {
      id: 3,
      nombre: 'Monitor',
      precio: 1500,
      cantidad: 1
    },
    {
      id: 4,
      nombre: 'Laptop',
      precio: 5000,
      cantidad: 1
    },
    {
      id: 5,
      nombre: 'Camara',
      precio: 200,
      cantidad: 1
    }
  ];

  constructor(private carritoService: CarritoService) {}

  agregar(producto: Product): void {
    this.carritoService.agregarProducto(producto);
  }
}
