import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = {
    name: 'Tom Cruise',
    email: 'tomcruise@gmail.com',
    phone: '6178394885',
    address: 'Broomfield, CO'
  }
}
