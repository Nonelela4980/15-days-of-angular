import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';

interface User{
  id:string,
  name:string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,ProductListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-angular';

  users = signal<User[]>([
    {id:'1',name:"nonelela"},
    {id:'2',name:"Tris"},
    {id:'3',name:"Tate"},
  ])

  user = this.users()[0]
}
