import { Tarea } from './../../model/Tarea';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {

  Task: Tarea = new Tarea();

  constructor(private router: Router,private fb: FormBuilder,private serv:TareasService) {
  }

  public taskForm = this.fb.group({
    tareaId:[this.Task.tareaId],
    descripcion:[this.Task.descripcion,Validators.maxLength(30)],
    completada: [this.Task.completada],
  });

  ngOnInit(): void {

  }

  submit(): void {

    this.serv.createTareas(this.taskForm.value as Tarea).subscribe((response)=>{
      if(response == 1){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tarea creada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/tasks'])
      }
    })

  }

}
