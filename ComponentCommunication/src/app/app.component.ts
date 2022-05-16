import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from './service/message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private msgService:MessageService) { }
  mensaje:string="";
  mensajeHijo:string="";

  obsHijo: BehaviorSubject<string>=new BehaviorSubject('Hijo usando Observable');


  ngOnInit(): void {
  }

  mensajeServicio(){
    this.mensajeHijo=this.msgService.mensajeServicioPadre();
  }

  mensajeInput(){
    this.mensajeHijo="Input desde el Padre"
  }

  mensajeOutput($event: string){
    this.mensaje=$event;
  }

  mensajeObservable(){
   this.obsHijo
   .subscribe(valor =>{
     this.mensajeHijo=valor;
   })
  }

}


