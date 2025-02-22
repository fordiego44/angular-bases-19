import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styles: ``
})
export class CharacterListComponent {

public characters = input.required<Character[]>();

public listName = input.required<string>();

}
