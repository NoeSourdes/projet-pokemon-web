interface Pokemon {
  id: number;
  name: string;
  nameFrench: string;
  image: string;
  hp: number;
  defense: number;
  speed: number;
  attack: number;
  special_attack: number;
  special_defense: number;
  type: string;
  typeFrench: string;
  pokemon_couple: string[];
  evolution_stage: string;
  price?: number;
}

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    nameFrench: "Bulbizarre",
    image: "https://i.postimg.cc/596mn4YS/Group-7.png",
    hp: 45,
    defense: 49,
    speed: 45,
    attack: 49,
    special_attack: 65,
    special_defense: 65,
    type: "grass",
    typeFrench: "plante",
    pokemon_couple: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 2,
    name: "Ivysaur",
    nameFrench: "Herbizarre",
    image: "https://i.postimg.cc/PJwDDPLK/Group-6.png",
    hp: 60,
    defense: 63,
    speed: 60,
    attack: 62,
    special_attack: 80,
    special_defense: 80,
    type: "grass",
    typeFrench: "plante",
    pokemon_couple: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 3,
    name: "Venusaur",
    nameFrench: "Florizarre",
    image: "https://i.postimg.cc/zGjpKSsb/venusaur.png",
    hp: 80,
    defense: 83,
    speed: 80,
    attack: 82,
    special_attack: 100,
    special_defense: 100,
    type: "grass",
    typeFrench: "plante",
    pokemon_couple: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 4,
    name: "Charmander",
    nameFrench: "Salameche",
    image: "https://i.postimg.cc/bNn0DFk8/Group-2.png",
    hp: 39,
    defense: 43,
    speed: 65,
    attack: 52,
    special_attack: 60,
    special_defense: 50,
    type: "fire",
    typeFrench: "feu",
    pokemon_couple: ["Charmander", "Charmeleon", "Charizard"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 5,
    name: "Charmeleon",
    nameFrench: "Reptincel",
    image: "https://i.postimg.cc/cH57YpF1/Group-1.png",
    hp: 58,
    defense: 58,
    speed: 80,
    attack: 64,
    special_attack: 80,
    special_defense: 65,
    type: "fire",
    typeFrench: "feu",
    pokemon_couple: ["Charmander", "Charmeleon", "Charizard"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 6,
    name: "Charizard",
    nameFrench: "Dracaufeu",
    image:
      "https://i.postimg.cc/RhxDQZbF/charizard-avec-arrie-re-plan-supprime-2.png",
    hp: 78,
    defense: 78,
    speed: 100,
    attack: 84,
    special_attack: 109,
    special_defense: 85,
    type: "fire",
    typeFrench: "feu",
    pokemon_couple: ["Charmander", "Charmeleon", "Charizard"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 7,
    name: "Squirtle",
    nameFrench: "Carapuce",
    image: "https://i.postimg.cc/W3tg29TB/Group-3.png",
    hp: 44,
    defense: 65,
    speed: 43,
    attack: 48,
    special_attack: 50,
    special_defense: 64,
    type: "water",
    typeFrench: "eau",
    pokemon_couple: ["Squirtle", "Wartortle", "Blastoise"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 8,
    name: "Wartortle",
    nameFrench: "Carabaffe",
    image: "https://i.postimg.cc/BZkBzr29/Group-4.png",
    hp: 59,
    defense: 80,
    speed: 58,
    attack: 63,
    special_attack: 65,
    special_defense: 80,
    type: "water",
    typeFrench: "eau",
    pokemon_couple: ["Squirtle", "Wartortle", "Blastoise"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 9,
    name: "Blastoise",
    nameFrench: "Tortank",
    image:
      "https://i.postimg.cc/BZDW8dwb/blastoise-avec-arrie-re-plan-supprime.png",
    hp: 79,
    defense: 100,
    speed: 78,
    attack: 83,
    special_attack: 85,
    special_defense: 105,
    type: "water",
    typeFrench: "eau",
    pokemon_couple: ["Squirtle", "Wartortle", "Blastoise"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 10,
    name: "Caterpie",
    nameFrench: "Chenipan",
    image: "https://i.postimg.cc/qMdP2j9L/Group-5.png",
    hp: 45,
    defense: 35,
    speed: 45,
    attack: 30,
    special_attack: 20,
    special_defense: 20,
    type: "bug",
    typeFrench: "insecte",
    pokemon_couple: ["Caterpie", "Metapod", "Butterfree"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 11,
    name: "Metapod",
    nameFrench: "Chrysacier",
    image:
      "https://i.postimg.cc/JzpSVmt6/metapod-avec-arrie-re-plan-supprime.png",
    hp: 50,
    defense: 55,
    speed: 30,
    attack: 20,
    special_attack: 25,
    special_defense: 25,
    type: "bug",
    typeFrench: "insecte",
    pokemon_couple: ["Caterpie", "Metapod", "Butterfree"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 12,
    name: "Butterfree",
    nameFrench: "Papilusion",
    image: "https://i.postimg.cc/50CrCCgT/image-6.png",
    hp: 60,
    defense: 45,
    speed: 70,
    attack: 45,
    special_attack: 90,
    special_defense: 80,
    type: "bug",
    typeFrench: "insecte",
    pokemon_couple: ["Caterpie", "Metapod", "Butterfree"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 13,
    name: "Weedle",
    nameFrench: "Aspicot",
    image:
      "https://i.postimg.cc/cJgwPZbW/weddle-avec-arrie-re-plan-supprime.png",
    hp: 40,
    defense: 30,
    speed: 50,
    attack: 35,
    special_attack: 20,
    special_defense: 20,
    type: "bug",
    typeFrench: "insecte",
    pokemon_couple: ["Weedle", "Kakuna", "Beedrill"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 14,
    name: "Kakuna",
    nameFrench: "Coconfort",
    image:
      "https://i.postimg.cc/d0xnT4zs/kakuna-avec-arrie-re-plan-supprime.png",
    hp: 45,
    defense: 50,
    speed: 35,
    attack: 25,
    special_attack: 25,
    special_defense: 25,
    type: "bug",
    typeFrench: "insecte",
    pokemon_couple: ["Weedle", "Kakuna", "Beedrill"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 15,
    name: "Beedrill",
    nameFrench: "Dardargnan",
    image:
      "https://i.postimg.cc/KvSqNp44/beedrill-avec-arrie-re-plan-supprime.png",
    hp: 65,
    defense: 40,
    speed: 75,
    attack: 80,
    special_attack: 45,
    special_defense: 80,
    type: "bug",
    typeFrench: "insecte",
    pokemon_couple: ["Weedle", "Kakuna", "Beedrill"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 16,
    name: "Pidgey",
    nameFrench: "Roucool",
    image: "https://i.postimg.cc/d0sGfsXt/Group-9.png",
    hp: 40,
    defense: 40,
    speed: 56,
    attack: 45,
    special_attack: 35,
    special_defense: 35,
    type: "flying",
    typeFrench: "vol",
    pokemon_couple: ["Pidgey", "Pidgeotto", "Pidgeot"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 17,
    name: "Pidgeotto",
    nameFrench: "Roucoups",
    image:
      "https://i.postimg.cc/TYfj1zpj/pidgeotto-avec-arrie-re-plan-supprime.png",
    hp: 63,
    defense: 55,
    speed: 71,
    attack: 60,
    special_attack: 50,
    special_defense: 50,
    type: "flying",
    typeFrench: "vol",
    pokemon_couple: ["Pidgey", "Pidgeotto", "Pidgeot"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 18,
    name: "Pidgeot",
    nameFrench: "Roucarnage",
    image:
      "https://i.postimg.cc/63ZV4wrc/pidgeot-avec-arrie-re-plan-supprime.png",
    hp: 83,
    defense: 75,
    speed: 101,
    attack: 80,
    special_attack: 70,
    special_defense: 70,
    type: "flying",
    typeFrench: "vol",
    pokemon_couple: ["Pidgey", "Pidgeotto", "Pidgeot"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 19,
    name: "Rattata",
    nameFrench: "Rattata",
    image:
      "https://i.postimg.cc/Dfqd2vyy/rattata-avec-arrie-re-plan-supprime.png",
    hp: 30,
    defense: 35,
    speed: 72,
    attack: 56,
    special_attack: 25,
    special_defense: 35,
    type: "normal",
    typeFrench: "normal",
    pokemon_couple: ["Rattata", "Raticate"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 20,
    name: "Raticate",
    nameFrench: "Rattatac",
    image:
      "https://i.postimg.cc/7hy3gcXk/raticate-avec-arrie-re-plan-supprime.png",
    hp: 55,
    defense: 60,
    speed: 97,
    attack: 81,
    special_attack: 50,
    special_defense: 70,
    type: "normal",
    typeFrench: "normal",
    pokemon_couple: ["Rattata", "Raticate"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 21,
    name: "Spearow",
    nameFrench: "Piafabec",
    image:
      "https://i.postimg.cc/wBCLpPCm/spearow-avec-arrie-re-plan-supprime.png",
    hp: 40,
    defense: 30,
    speed: 70,
    attack: 60,
    special_attack: 31,
    special_defense: 31,
    type: "flying",
    typeFrench: "vol",
    pokemon_couple: ["Spearow", "Fearow"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 22,
    name: "Fearow",
    nameFrench: "Rapasdepic",
    image:
      "https://i.postimg.cc/qqfL1gJW/fearow-avec-arrie-re-plan-supprime.png",
    hp: 65,
    defense: 65,
    speed: 100,
    attack: 90,
    special_attack: 61,
    special_defense: 61,
    type: "normal",
    typeFrench: "normal",
    pokemon_couple: ["Spearow", "Fearow"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 23,
    name: "Ekans",
    nameFrench: "Abo",
    image:
      "https://i.postimg.cc/P5KSdty8/ekans-avec-arrie-re-plan-supprime.png",
    hp: 35,
    defense: 44,
    speed: 55,
    attack: 60,
    special_attack: 40,
    special_defense: 54,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Ekans", "Arbok"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 24,
    name: "Arbok",
    nameFrench: "Arbok",
    image:
      "https://i.postimg.cc/1ztJtL77/cobra-avec-arrie-re-plan-supprime.png",
    hp: 60,
    defense: 69,
    speed: 80,
    attack: 85,
    special_attack: 65,
    special_defense: 79,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Ekans", "Arbok"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 25,
    name: "Pikachu",
    nameFrench: "Pikachu",
    image:
      "https://i.postimg.cc/QMwkMVTV/Pikachu01-avec-arrie-re-plan-supprime.png",
    hp: 35,
    defense: 30,
    speed: 90,
    attack: 55,
    special_attack: 50,
    special_defense: 40,
    type: "electric",
    typeFrench: "electrik",
    pokemon_couple: ["Pikachu", "Raichu"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 26,
    name: "Raichu",
    nameFrench: "Raichu",
    image:
      "https://i.postimg.cc/3NCg9BbD/raichu-avec-arrie-re-plan-supprime.png",
    hp: 60,
    defense: 55,
    speed: 110,
    attack: 90,
    special_attack: 90,
    special_defense: 80,
    type: "electric",
    typeFrench: "electrik",
    pokemon_couple: ["Pikachu", "Raichu"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 27,
    name: "Sandshrew",
    nameFrench: "Sabelette",
    image:
      "https://i.postimg.cc/Z5D6f0jj/sandhrew-avec-arrie-re-plan-supprime.png",
    hp: 50,
    defense: 95,
    speed: 40,
    attack: 75,
    special_attack: 20,
    special_defense: 30,
    type: "ground",
    typeFrench: "sol",
    pokemon_couple: ["Sandshrew", "Sandslash"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 28,
    name: "Sandslash",
    nameFrench: "Sablaireau",
    image:
      "https://i.postimg.cc/Y9QgqR7y/sandslash-avec-arrie-re-plan-supprime.png",
    hp: 75,
    defense: 110,
    speed: 65,
    attack: 100,
    special_attack: 45,
    special_defense: 55,
    type: "ground",
    typeFrench: "sol",
    pokemon_couple: ["Sandshrew", "Sandslash"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 29,
    name: "Nidoran♀",
    nameFrench: "Nidoran♀",
    image:
      "https://i.postimg.cc/2y4xMm3y/nidoran-F-avec-arrie-re-plan-supprime.png",
    hp: 55,
    defense: 47,
    speed: 41,
    attack: 47,
    special_attack: 40,
    special_defense: 40,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Nidoran♀", "Nidorina", "Nidoqueen"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 30,
    name: "Nidorina",
    nameFrench: "Nidorina",
    image:
      "https://i.postimg.cc/YShzkQjJ/nidorina-avec-arrie-re-plan-supprime.png",
    hp: 70,
    defense: 62,
    speed: 56,
    attack: 62,
    special_attack: 55,
    special_defense: 55,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Nidoran♀", "Nidorina", "Nidoqueen"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 31,
    name: "Nidoqueen",
    nameFrench: "Nidoqueen",
    image:
      "https://i.postimg.cc/ryWgKGgT/nidoqueen-avec-arrie-re-plan-supprime.png",
    hp: 90,
    defense: 87,
    speed: 76,
    attack: 82,
    special_attack: 75,
    special_defense: 85,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Nidoran♀", "Nidorina", "Nidoqueen"],
    evolution_stage: "third",
    price: 380,
  },
  {
    id: 32,
    name: "Nidoran♂",
    nameFrench: "Nidoran♂",
    image:
      "https://i.postimg.cc/RVLRTMjb/nidoranm-avec-arrie-re-plan-supprime.png",
    hp: 46,
    defense: 57,
    speed: 50,
    attack: 57,
    special_attack: 40,
    special_defense: 40,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Nidoran♂", "Nidorino", "Nidoking"],
    evolution_stage: "first",
    price: 160,
  },
  {
    id: 33,
    name: "Nidorino",
    nameFrench: "Nidorino",
    image:
      "https://i.postimg.cc/J4xNkpkf/nidorino-avec-arrie-re-plan-supprime.png",
    hp: 61,
    defense: 72,
    speed: 65,
    attack: 72,
    special_attack: 55,
    special_defense: 55,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Nidoran♂", "Nidorino", "Nidoking"],
    evolution_stage: "second",
    price: 230,
  },
  {
    id: 34,
    name: "Nidoking",
    nameFrench: "Nidoking",
    image:
      "https://i.postimg.cc/xT25HkFz/nido-king-avec-arrie-re-plan-supprime.png",
    hp: 81,
    defense: 92,
    speed: 85,
    attack: 92,
    special_attack: 75,
    special_defense: 85,
    type: "poison",
    typeFrench: "poison",
    pokemon_couple: ["Nidoran♂", "Nidorino", "Nidoking"],
    evolution_stage: "third",
    price: 380,
  },
];

export default pokemons;
