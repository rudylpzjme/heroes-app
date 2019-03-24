import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(
    private _heroesService: HeroesService,
    private _actvatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._actvatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

}
