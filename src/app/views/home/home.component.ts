import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// $(document).ready(function() {

//   $("#bars").click(function() {
//       $("#categorias").toggleClass("menu-show")
//   })
// })

// let email = document.getElementById("campo_email");

// function cadastroEmail() {
//   let emailDigitado = email.value;
//   console.log(emailDigitado);
// }


// let search = document.getElementById("campo_search");

// function searchGo() {
//   let searchDigitada = search.value;
//   console.log(searchDigitada);
// }

// let listaNoticias = [
//   {
//       imagem: "./img/copa_rakin_valorant.png",
//       img_alt: "imagem de flyer da Copa Rakin de Valorant: chegou o momento",
//       titulo: "Copa Rakin - 2ª edição",
//       descricao: "Nova edição terá foco em mulheres, transgêneros e não-binários e distribuirá R$ 40 mil em premiação.",
//       link_news: "#"
//   },
//   {
//       imagem: "./img/fifa22.png",
//       img_alt: "imagem de anúncio do Jogo Fifa 22 com jogadores do Paris Saint Germain perfilados: Neymar, Mbape e Di Maria",
//       titulo: "Em breve! FIFA 22",
//       descricao: "Novo FIFA mergulha na nova geração de consoles e, como de costume, parece solucionar grandes problemas do anterior.",
//       link_news: "#"
//   },
//   {
//       imagem: "./img/free_fire_favela.png",
//       img_alt: "imagem de flyer da campeonato Free Fire Taça das Favelas",
//       titulo: "Free Fire: Taça das Favelas",
//       descricao: "Nova edição da Taça das Favelas terá repescagem e premiação de mais de R$ 100 mil e bootcamp na LOUD.",
//       link_news: "#"
//   },
//   {
//       imagem: "./img/re4-vr.png",
//       img_alt: "imagem dos personagens do jogo Resident Evil 4",
//       titulo: "Em breve! Resident Evil 4 VR",
//       descricao: "O jogo será lançado em 21/10 para Oculus Quest 2. A data foi anunciada por meio de  trailer inédito divulgado nesta 2ª (27).",
//       link_news: "#"
//   }
// ]


// function renderizarNoticias() {

//   let news_space = document.getElementById("news_space")
  
//   let template ="";
  
//   for (let index = 0; index < listaNoticias.length; index++) {

//       const noticia = listaNoticias[index];
      
//       template += `<div class="card-news">
//       <a href="${noticia.link_news}"><img src="${noticia.imagem}" alt="${noticia.img_alt}"></a>
//       <h3>${noticia.titulo}</h3>
//       <p>${noticia.descricao}</p>
//       <a href="${noticia.link_news}">Ler notícia</a>
//   </div>`
//   }

//   news_space.innerHTML = template
  // chamar renderizarNoticias onload
// }