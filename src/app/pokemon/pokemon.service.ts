import { POKEMONS } from './mock-pokemon-list';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Combat',
      'Psy'];
  }
}
