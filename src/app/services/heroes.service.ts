import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable()

export class HeroesService {
    private heroes:Heroe[] = [
        {
          name: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          thumbnail: "assets/imgs/aquaman.png",
          imgCover: "assets/imgs/aquaman-cover.jpg",
          created: "1941-11-01",
          company:"DC",
          id: "0",
        },
        {
          name: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          thumbnail: "assets/imgs/batman.png",
          imgCover: "assets/imgs/batman-cover.jpg",
          created: "1939-05-01",
          company:"DC",
          id: "1",
        },
        {
          name: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          thumbnail: "assets/imgs/daredevil.png",
          imgCover: "assets/imgs/daredevil-cover.jpg",
          created: "1964-01-01",
          company: "Marvel",
          id: "2",
        },
        {
          name: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          thumbnail: "assets/imgs/hulk.png",
          imgCover: "assets/imgs/hulk-cover.jpg",
          created: "1962-05-01",
          company:"Marvel",
          id: "3",
        },
        {
          name: "Green Lantern",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          thumbnail: "assets/imgs/greenlintern.png",
          imgCover: "assets/imgs/greenlantern-cover.jpg",
          created: "1940-06-01",
          company: "DC",
          id: "4",
        },
        {
          name: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          thumbnail: "assets/imgs/spiderman.png",
          imgCover: "assets/imgs/spiderman-cover.jpg",
          created: "1962-08-01",
          company: "Marvel",
          id: "5",
        },
        {
          name: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          thumbnail: "assets/imgs/wolverine.png",
          imgCover: "assets/imgs/wolverine-cover.jpg",
          created: "1974-11-01",
          company: "Marvel",
          id: "6",
        }
    ];
    constructor() { }

    getHeroes():Heroe[] {
        return this.heroes;
    }

    getHeroe(index: number): Heroe {
      return this.heroes[index];
    }

    findHeroes(query: string): Heroe[] {
      let heroesFounded: Heroe[] = [];
      heroesFounded = this.heroes.filter(heroe => {
        return heroe.name.toLowerCase().includes(query.toLowerCase());
      });
      return heroesFounded;
    }
}
