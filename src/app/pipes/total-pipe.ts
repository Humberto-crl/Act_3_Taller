import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'total',
  standalone: false,
})
export class TotalPipe implements PipeTransform {
  transform(productos: Product[]): number {

    return productos.reduce(

      (total, producto) => total + (producto.precio * producto.cantidad),
      
      0
    );
  }
}
