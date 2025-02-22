import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage = ()=>{
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());
  // characters = signal<Character[]>([
  //   { id:1, name: 'Goku', power: 9001 },
  //   { id:2, name: 'Veguetta', power: 8000 }
  // ]);

  saveToLocalStorage = effect(() =>{
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

  addCharacter(newCharacter:Character){
    this.characters.update( (list) => [...list, newCharacter] );
  }

}
