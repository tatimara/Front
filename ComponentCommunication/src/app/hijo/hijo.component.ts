import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  constructor(private msgService: MessageService) { }

  mensajeHijo: string = "";
  @Input() msgInput: string = "";

  @Output()
  msgOutput: EventEmitter<string> = new EventEmitter();

  obsPadre: BehaviorSubject<string> = new BehaviorSubject('Padre usando el servicio');

  mensajeServicioHijo() {
    this.msgOutput.emit(this.msgService.mensajeServicioPadre());
  }
  ngOnInit(): void {

  }

  mensajeOutput() {
    this.msgOutput.emit("Output desde el hijo");
  }

  observableHijo() {

    this.obsPadre
      .subscribe(value => {
        this.msgOutput.emit(value);
      })
  }

}
