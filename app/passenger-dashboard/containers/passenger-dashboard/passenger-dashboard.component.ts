import { Component } from "@angular/core";
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template: `
        <div>
        <h3>Airline Passengers</h3>
        <ul>
            <li *ngFor= "let passenger of passengers; let i = index">
            <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
            >
            </span>
            {{ i + 1 }}: {{ passenger.fullname }}
            </li>
        </ul>
        </div>
    `
})

export class PassengerDashboardComponent{
    passengers: Passenger[] =[
        {
          id:1,
          fullname: 'Langston Highland-Perara',
          checkedIn: true,
          checkInDate: null,
          children: null
        },
        {
          id:2,
          fullname: 'Theodore Highland-Perara',
          checkedIn: false,
          checkInDate: null,
          children: null
          },
        {
          id:3,
          fullname: 'Frank Lunde',
          checkedIn: false,
          checkInDate: null,
          children: null
        },
        {
          id:4,
          fullname: 'Edgar Lunde',
          checkedIn: true,
          checkInDate: null,
          children: null
        },
        {
          id:5,
          fullname: 'Henry Lunde',
          checkedIn: true,
          checkInDate: null,
          children: null
        },
      ]
}