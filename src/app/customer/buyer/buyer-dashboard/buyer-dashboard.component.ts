import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-buyer-dashboard',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './buyer-dashboard.component.html',
  styleUrl: './buyer-dashboard.component.css'
})
export class BuyerDashboardComponent implements OnInit {

  all_Products:any;
  show_Checkout: boolean = false;

  constructor(private router:Router, private customerService:CustomerService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.customerService.allProduct().subscribe(data =>{
      this.all_Products = data;
    }, error =>{
      console.log("My Error", error)
    })
  }

  buyProduct(id:any){
    this.show_Checkout = true;
    this.customerService.quickBuyProduct(id);
    this.router.navigateByUrl('/checkout');
  }

  addToCart(){
    alert("This is showcase")
  }

}
