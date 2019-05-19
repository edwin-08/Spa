import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Service
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
  styleUrls: ['./heroe-search.component.css']
})
export class HeroeSearchComponent implements OnInit {

  heroes:Heroe[] = [];
  busqueda:string;

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService)  { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
          this.busqueda=params['id'];
          this.heroes=this._heroeService.buscarHeroes(params['id']);
          console.log(this.heroes);
    })
  }

}
