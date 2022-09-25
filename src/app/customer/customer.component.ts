import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"sl":1,"cusname":"john","item":"samsung led","DOP":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":2,"cusname":"Catherein","item":"samsung led","DOP":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":3,"cusname":"Emmanuel","item":"samsung led","DOP":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":4,"cusname":"Peter","item":"samsung led","DOP":"21/10/22","photo":"1.jpg","qty":150},
    {"sl":5,"cusname":"Samuel","item":"samsung led","DOP":"21/10/22","photo":"1.jpg","qty":150}
    
    
    
  
  
  ]


}
