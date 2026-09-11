import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductosComponent } from './components/productos/productos';
import { CarritoComponent } from './components/carrito/carrito';
import { ResumenComponent } from './components/resumen/resumen';
import { SubtotalPipe } from './pipes/subtotal-pipe';
import { TotalPipe } from './pipes/total-pipe';

@NgModule({
  declarations: [App, ProductosComponent, CarritoComponent, ResumenComponent, SubtotalPipe, TotalPipe],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
