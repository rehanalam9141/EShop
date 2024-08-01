import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  screenHeight:any;
  screenWidth:any;
  footerMazHeight:any;
  title = 'EShop';

  constructor() {

    this.getScreenSize(event)
    
  }
 // @HostListener('window:resize',['&event'])

  getScreenSize(event:any){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.footerMazHeight = this.screenHeight - 160;
  }
}
