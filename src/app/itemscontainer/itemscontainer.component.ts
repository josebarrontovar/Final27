import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemscontainer',
  templateUrl: './itemscontainer.component.html',
  styleUrls: ['./itemscontainer.component.css']
})
export class ItemscontainerComponent implements OnInit {
  texto="Aprovecha este descuento solo por 24hrs!";
  items = [
    {
      title: "Vestibulum ante",
      description: "Aliquam ornare diam elit, interdum.",
      url:"https://cdn1.img.sputniknews.com/images/104502/68/1045026802.jpg"
        },
    {
      title: "Integer sit.",
      description: "Maecenas pretium nunc dui, sit.",
      url:"https://cms.qz.com/wp-content/uploads/2017/09/ap_925627722017-e1504907513818.jpg?quality=80&strip=all&w=1600"
    },
    {
      title: "Mauris vel.",
      description: "Ut odio lorem, lobortis eget dui seh.",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrqZbQ6q6WqgA3MsDMEf8Yd41xmyPQcCxgrimKXy_lTjm4ZBS"
      
    },
    {
      title: "Maecenas a.",
      description: "Aliquam dictum, ipsum id efficitur.",
      url:"https://www.stratfor.com/sites/default/files/styles/article_large/public/russia-series-1-display.jpg?itok=eorzlvA9"
    },
    {
      title: "Duis congue.",
      description: "Nam ex ante, elementum eu.",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rW1E2M9knmr6BScxExGH1-qOjWvHbLLHMJW9VcK9YmgIG7G4"
    }
  ]
  constructor() {
  
   }
   modTexto(){
     this.texto="Accessing ...";
    return this.texto;
    
    }
   
  ngOnInit() {
  }

}
