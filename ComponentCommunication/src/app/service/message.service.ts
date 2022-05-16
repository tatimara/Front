
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor() { }

  mensajeServicioPadre():string{
    
    return 'Hijo usando el servicio'
  }

  
  mensajeServicioHijo():string{
    return 'Padre usando el servicio';
  }

}