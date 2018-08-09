import { Component, OnInit } from '@angular/core';
import { HeroService } from './dc-heros.service';

@Component({
  selector: 'app-dc-heros',
  templateUrl: './dc-heros.component.html',
  styleUrls: ['./dc-heros.component.css'],
  providers: [HeroService]
})
export class DcHerosComponent implements OnInit {

  heros: string[];
  btnDisable = false;
  inputHero = null;
  adding = false;

  AddHero() {
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  }

  Remove() {
    this.heros.pop();
  }


  AddMore() {
    this.adding = !this.adding;
  }

  constructor(private hero: HeroService) {
    this.heros = this.hero.heros;
  }

  ngOnInit() {
  }

}
