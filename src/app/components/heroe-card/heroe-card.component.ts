import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() id: number;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  heroeDetails() {
    this._router.navigate(['/heroe', this.heroe.id]);
  }
}
