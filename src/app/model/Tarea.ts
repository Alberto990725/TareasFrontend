export class Tarea {

  public tareaId:number = 0;
  public descripcion?:string;
  public completada:boolean = false;

  constructor(){}

  public IsPresent():boolean{
    return this.tareaId !=undefined && this.descripcion != undefined
  }

}
