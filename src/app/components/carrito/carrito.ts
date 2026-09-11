import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: false,
  styleUrls: ['./carrito.scss'],
  templateUrl: './carrito.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarritoComponent implements OnInit{

  productosCarrito: Product[] = [];

  constructor(
    private carritoService: CarritoService,
  ) {}

  ngOnInit(): void {
      this.carritoService.carrito$.subscribe(productos => {

        this.productosCarrito = [...productos];

      });
  }

    actualizarCantidad(
      id: number,
      event: Event
    ): void {

      const cantidad = Number(
        (event.target as HTMLInputElement).value
      );

      this.carritoService.actualizarCantidad(
        id,
        cantidad
      );

    }

    eliminar(id: number): void {

      this.carritoService.eliminarProducto(id);

    }
}
