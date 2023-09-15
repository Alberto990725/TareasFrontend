import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../model/Tarea';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit {

  constructor(private service:TareasService,private router: Router) {}


  private gridApi!: GridApi<Tarea>;

  columnDefs: ColDef[] = [
      { field: 'tareaId',headerName:'ID',hide:true},
      { field: 'ckeckbox' ,checkboxSelection: true,headerName:'',hide:false,width:20},
      { field: 'descripcion' ,headerName:'DESCRIPCION',width: 1000},
      { field: 'completada',headerName:'COMPLETADA',width: 650}
  ];

  public rowData:any = [];

  public taskAct:Tarea = new Tarea();

  public textButton:string = '';

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };




  ngOnInit(): void {
    this.RefreshGrid()
  }

  RefreshGrid(){
    this.service.getTareas().subscribe(data => {
      this.rowData = data
    })
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onRowSelected(row:any): void {
    const selectedRows = this.gridApi.getSelectedRows();
    this.taskAct = selectedRows[0];
  }

  OnEdit():void {
    this.service.updateTarea(this.taskAct).subscribe(response =>{
      if(response){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Estatus cambiado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.RefreshGrid();
      }
    })
  }

  OnDelete():void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })


    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Este registro se eliminara y no podras recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Eliminalo!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.deleteTarea(this.taskAct).subscribe(response =>{
          if(response){
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'Registro eliminado correctamente',
              'success'
            )
            this.RefreshGrid();
          }
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Se ha cancelado la accion',
          'error'
        )
      }
    })

    /**/
  }

  OnCreate():void {
    this.router.navigate(['/new']);
  }


}
