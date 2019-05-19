import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  // Prepara la variable con el decorador para que pueda emitir un número al 
  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private _router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    //console.log(this.index);
    this._router.navigate( ['/heroe', this.index ]);

    // Emite lo que contiene index al llamado del padre
    //this.heroeSeleccionado.emit( this.index);
  }

}
