import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  foundedHeroes: Heroe[];

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._foundedHeroes();
  }

  private _foundedHeroes() {
    this._activatedRoute.params.subscribe(params => {
      this.foundedHeroes = this._heroesService.findHeroes(params['query']);
      console.log(this.foundedHeroes[0]);
    });
  }
}
