import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemons);
  }

  pokemonChoice(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemons
      .find(pokemon => pokemon.id == +pokemonId);

    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log("Le pokémon n'existe pas");
      this.pokemonSelected = pokemon
    }
  }
}
