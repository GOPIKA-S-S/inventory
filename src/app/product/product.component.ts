import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(api:ProjectService) { 
    api.viewprdt().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }
  data:any=[
    
     ]

}



