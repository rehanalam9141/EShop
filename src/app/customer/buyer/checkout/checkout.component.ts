import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order, Product, User } from '../../../core/Model/object-model';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  single_product_id:any;
  user_id:any;
  individual_product!:Product;
  user_detail!: User;
  user_address:any;
  user_contact_no:any;
  order_dto!:Order

  constructor(private customerService:CustomerService, private router:Router) {
    
  }
  ngOnInit(): void {
    this.customerService.currentProduct.subscribe(product => this.single_product_id = product);
    this.user_id = Number(sessionStorage.getItem("user_session_id"));
    this.product_detail(this.single_product_id);
    this.userAddress(this.user_id);

  }

  product_detail(single_product_id:any){
    this.customerService.individualProduct(single_product_id).subscribe(data=>{
      this.individual_product = data;
      console.warn("my single product", this.individual_product)
    }, error =>{
      console.log("my error", error)
    })
  }

  userAddress(user_id:any){
    this.customerService.userDetail(user_id).subscribe(data =>{
      this.user_address = data;
      this.user_contact_no = data.mobNumber;
    }, error =>{
      console.log("my error", error)
    })
  }

  
}
