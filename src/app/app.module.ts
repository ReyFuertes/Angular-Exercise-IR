import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './pages/table/tables.component';

@NgModule({
  declarations: [AppComponent, TablesComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
