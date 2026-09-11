import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-resumen',
  standalone: false,
  styleUrls: ['./resumen.scss'],
  templateUrl: './resumen.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ResumenComponent implements OnInit{
  productosCarrito: Product[] = [];

  constructor(
    private carritoService: CarritoService,) {}

  ngOnInit(): void {
      this.carritoService.carrito$.subscribe(productos => {

        this.productosCarrito = [...productos];

      });
  }
}
