import { Injectable } from "@angular/core";
import {Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable()
export class HeroesService{
    heroesURL: string = "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=bede7a50838182a24b00101546bed4c5";

    private heroes:Heroe[] = [];

      constructor(private http:Http){
        this.http.get(this.heroesURL).map( res => res.json() ).subscribe(data =>{
        console.log("---data", data.data);

        for (let i = 0; i < data.data.count; i++){
          let elheroe: Heroe;

          elheroe=this.heroeNuevo(data.data.results[i].name, data.data.results[i].description, data.data.results[i].modified, data.data.results[i].thumbnail.path+"."+data.data.results[i].thumbnail.extension, data.data.results[i].comics.items);

          this.heroes.push(elheroe);
        }
      });
    }
    heroeNuevo(name, description, modified, thumbnail, _comic): Heroe {
        return  {
          nombre: name,
          bio: description,
          aparicion: modified,
          img: thumbnail,
          casa: 'Marvel',
          comic: _comic
        };
    }
    getHeroes():Heroe[]{
        return this.heroes;
    }

    getHeroe(id:number):Heroe{
        return this.heroes[id];
    }

    buscarHeroes( termino:string): Heroe[]{
      let heroeArr:Heroe[] = [];
      termino = termino.toLowerCase();

      //for (let heroe of this.heroes){
      for (let i = 0; i < this.heroes.length; i++){
        let heroe = this.heroes[i];
        let nombre = heroe.nombre.toLowerCase();
        if ( nombre.indexOf( termino ) >= 0){
          heroe.idx=i;
          heroeArr.push (heroe)
        }
      }
      return heroeArr;
    }
}

export interface Heroe{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
    comic?: string;
}
