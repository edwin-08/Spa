// Componentes
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe (termino:string){
    this._router.navigate( ['/heroe-search', termino ]);
  }
}