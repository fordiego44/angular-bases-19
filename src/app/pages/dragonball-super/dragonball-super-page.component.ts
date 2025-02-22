import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';



@Component({
  selector:'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);


  //sin servicio se pierde info
  // characters = signal<Character[]>([
  //   { id:1, name: 'Goku', power: 9001 },
  //   { id:2, name: 'Veguetta', power: 8000 }
  // ]);

  // addCharacter(newCharacter:Character){
  //   this.characters.update( (list) => [...list, newCharacter] );
  // }


}
