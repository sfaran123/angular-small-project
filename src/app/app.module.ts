import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule } from 'src/app/shared/_components/data-table/data-table.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from 'src/app/layout/header/header.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    DataTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
