import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'subtotal',
  standalone: false,
  pure: false
})
export class SubtotalPipe implements PipeTransform {
  transform(producto: Product): number {
    return producto.precio * producto.cantidad;
  }
}
