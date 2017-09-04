import {Component, OnInit} from "@angular/core";
import {Hero} from "./model/hero";
import {HeroService} from './service/hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls: ['app/heroes/heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
    debugger;
  }

  constructor(private heroService: HeroService, private router: Router) {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}







