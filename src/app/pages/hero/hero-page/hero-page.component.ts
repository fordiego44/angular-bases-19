import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {

  public name = signal( 'Ironman');
  public age = signal( 45);

  heroDescription = computed(()=>{
    const description = `${ this.name() } - ${ this.age() }`;
    return description;
  });

  capitalizedName = computed(() => `${this.name().toUpperCase()}` );

  getHeroDescription():string{
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero():void{
    this.name.set('Spiderman');
    this.age.set(22);

  }

  resetForm():void{
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge():void{
    this.age.set(60);
  }

}
