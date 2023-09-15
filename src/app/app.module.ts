import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './pages/tareas.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AgGridModule } from 'ag-grid-angular'
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TareaDetailComponent } from './pages/tarea-detail/tarea-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    TareaDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
