import { ChangeDetectorRef, Component } from '@angular/core';
import { Productcard } from "../../ui/productcard/productcard";
import { Api } from '../../api';

@Component({
  selector: 'app-product',
  imports: [Productcard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product:any;
  constructor(private api:Api,private cdr:ChangeDetectorRef){}
 ngOnInit() {

      this.api.getallproducts().subscribe((res:any)=>{
 this.product=res;
 this.cdr.detectChanges()
      })}
    
  }

