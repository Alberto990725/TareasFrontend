import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas.component';
import { TareaDetailComponent } from './pages/tarea-detail/tarea-detail.component';

const routes: Routes = [
  { path: 'tasks', component:TareasComponent },
  { path: 'new', component:TareaDetailComponent },
  { path: 'edit', component:TareaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
