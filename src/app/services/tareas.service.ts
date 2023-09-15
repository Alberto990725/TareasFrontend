import { Tarea } from './../model/Tarea';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http_ : HttpClient) { }


  public server:string = 'https://localhost:7271';

  public getTareas(){
    return this.http_.get(`${this.server}/api/Tareas/tareas`);

  }

  public createTareas(Tarea:Tarea){
    return this.http_.post(`${this.server}/api/Tareas/tareas`,Tarea);
  }

  public updateTarea(Tarea:Tarea){
    return this.http_.put(`${this.server}/api/Tareas/tareas/${Tarea.tareaId}`,Tarea);
  }

  public deleteTarea(Tarea:Tarea){
    return this.http_.delete(`${this.server}/api/Tareas/tareas/${Tarea.tareaId}`);
  }


}
