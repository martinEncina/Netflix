import { Component } from '@angular/core';
import { allFilmsI } from './models/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent { 
  title = 'netflix-app';

  // dentro de export declaro una variable para importar el model que cree en interface
  arrayAction: allFilmsI = {
    section: "Action",
    films: [
      {
        title:"Ejercito de Muertos",
        image:"../assets/images/Accion/ejercitomuertos.jpg",
      },
      {
        title:"El protector",
        image:"../assets/images/Accion/elprotector.webp",
      },
      {
        title:"Equalizer 2",
        image:"../assets/images/Accion/equalizer2.webp",
      },
      {
        title:"Heat",
        image:"../assets/images/Accion/heat.webp",
      },
      {
        title:"Jackreacher",
        image:"../assets/images/Accion/jackreacher.webp",
      },
      {
        title:"John Wick 2",
        image:"../assets/images/Accion/johnwick2.webp",
      },
      {
        title:"Kill bill 2",
        image:"../assets/images/Accion/killbill2.webp",
      },
      {
        title:"Mision imposible nacion",
        image:"../assets/images/Accion/misionimposiblenacion.webp",
      },
      {
        title:"Renacido",
        image:"../assets/images/Accion/renacido.webp",
      },
      {
        title:"Terminator 2",
        image:"../assets/images/Accion/terminator2.webp",
      },
      {
        title:"World War Z",
        image:"../assets/images/Accion/worldwarz.webp",
      },
          
    ]
    
  }  
  arrayAnime: allFilmsI = {
    section: "Anime",
    films: [
      {
        title:"Ajin",
        image:"../assets/images/Anime/ajin.jpg",
      },
      {
        title:"Castillo ambulante",
        image:"../assets/images/Anime/castilloambulante.webp",
      },
      {
        title:"Chihiro",
        image:"../assets/images/Anime/chihiro.webp",
      },
      {
        title:"Evangelion",
        image:"../assets/images/Anime/evangelion.webp",
      },
      {
        title:"Gitsarise",
        image:"../assets/images/Anime/gitsarise.webp",
      },
      {
        title:"Gundam",
        image:"../assets/images/Anime/gundam.webp",
      },
      {
        title:"El castillo en el cielo",
        image:"../assets/images/Anime/laputa.webp",
      },
      {
        title:"Mononoke",
        image:"../assets/images/Anime/mononoke.webp",
      },
      {
        title:"Ninokuni",
        image:"../assets/images/Anime/ninokuni.jpg",
      },
      {
        title:"Perfect blue",
        image:"../assets/images/Anime/perfectblue.webp",
      },
      {
        title:"Porco Rosso",
        image:"../assets/images/Anime/porcorosso.webp",
      },
          
    ]
    
  }  
  arrayComedia: allFilmsI = {
    section: "Comedia",
    films: [
      {
        title:"Casi 300",
        image:"../assets/images/Comedia/casi300.webp",
      },
      {
        title:"Caza Fantasmas",
        image:"../assets/images/Comedia/cazafantasmas.webp",
      },
      {
        title:"Dictador",
        image:"../assets/images/Comedia/dictador.webp",
      },
      {
        title:"Era se Hollywood",
        image:"../assets/images/Comedia/erasehollywood.webp",
      },
      {
        title:"Family Guy",
        image:"../assets/images/Comedia/family guy.webp",
      },
      {
        title:"Juerga",
        image:"../assets/images/Comedia/juerga.webp",
      },
      {
        title:"La terminal",
        image:"../assets/images/Comedia/laterminal.webp",
      },
      {
        title:"Volver al futuro",
        image:"../assets/images/Comedia/regresofuturo.webp",
      },
      {
        title:"Padresella",
        image:"../assets/images/Comedia/padresella.webp",
      },
      {
        title:"Rick and Morty",
        image:"../assets/images/Comedia/rickandmorty.webp",
      },
      {
        title:"Scarty Movie 3",
        image:"../assets/images/Comedia/scarymovie3.webp",
      },
      {
        title:"Ted 2",
        image:"../assets/images/Comedia/ted2.webp",
      }          
    ]
  }
  
  
  arrayTerror: allFilmsI = {
    section: "Terror",
    films: [
      {
        title:"Apotol",
        image:"../assets/images/Terror/apostol.jpg",
      },
      {
        title:"Calle del Terror",
        image:"../assets/images/Terror/calleterror.jpg",
      },
      {
        title:"Infierno bajo el Agua",
        image:"../assets/images/Terror/infiernoagua.webp",
      },
      {
        title:"Insidious",
        image:"../assets/images/Terror/insidious2.webp",
      },
      {
        title:"Life",
        image:"../assets/images/Terror/life.webp",
      },
      {
        title:"Mala Sana",
        image:"../assets/images/Terror/malasana.webp",
      },
      {
        title:"Multiple",
        image:"../assets/images/Terror/multiple.webp",
      },      
      {
        title:"Reflejos",
        image:"../assets/images/Terror/reflejos.webp",
      }
          
    ]
  }
  arrayDrama: allFilmsI = {
    section: "Drama",
    films: [
      {
        title:"1917",
        image:"../assets/images/Drama/1917.webp",
      },
      {
        title:"Arrival",
        image:"../assets/images/Drama/arrival.webp",
      },
      {
        title:"El club de la pelea",
        image:"../assets/images/Drama/clublucha.webp",
      },
      {
        title:"Corazones",
        image:"../assets/images/Drama/corazones.webp",
      },
      {
        title:"Culpable",
        image:"../assets/images/Drama/culpable.jpg",
      },
      {
        title:"La Milla Verde",
        image:"../assets/images/Drama/millaverde.webp",
      },
      {
        title:"Naufrago",
        image:"../assets/images/Drama/naufrago.webp",
      },
      {
        title:"No es país para viejos",
        image:"../assets/images/Drama/noespais.webp",
      },
      {
        title:"Rescantando al soldado Ryan",
        image:"../assets/images/Drama/salvaralsoldado.webp",
      },
      {
        title:"Scarface",
        image:"../assets/images/Drama/scarface.webp",
      },
      {
        title:"La lista de Schindler",
        image:"../assets/images/Drama/schindler.webp",
      },
      {
        title:"Sombra del Diablo",
        image:"../assets/images/Drama/sombradiablo.webp",
      },
      {
        title:"Unico superviviente",
        image:"../assets/images/Drama/unicosuperviviente.webp",
      },
                
    ]
  }
  arrayTop10: allFilmsI = {
    section: "LOS 10 MÁS POPULARES DE HOY",
    films: [
      {
        title:"La casa de papel",
        image:"../assets/images/Top10/1-papel.webp",
      },
      {
        title:"La reyna del flow",
        image:"../assets/images/Top10/2-reina.webp",
      },
      {
        title:"Titanes",
        image:"../assets/images/Top10/3-titanes.webp",
      },
      {
        title:"Lost in Space",
        image:"../assets/images/Top10/4-lostinspace.webp",
      },
      {
        title:"Donde caben",
        image:"../assets/images/Top10/5-dondecaben.webp",
      },
      {
        title:"Aqui no hay quien viva",
        image:"../assets/images/Top10/6-aquinohay.webp",
      },
      {
        title:"The Black list",
        image:"../assets/images/Top10/7-blacklist.webp",
      },
      {
        title:"Ricos y mimados",
        image:"../assets/images/Top10/8-ricos.webp",
      },
      {
        title:"El poder del perro",
        image:"../assets/images/Top10/9-poder.webp",
      },
      {
        title:"GoodDoctor",
        image:"../assets/images/Top10/10-gooddoctor.webp",
      },
     
    ]
  }
} 
// <<<<< Cierre de componente


