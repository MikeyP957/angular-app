import { Component, OnInit } from "@angular/core";
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template: `
        <div>
        <passenger-count
            [items]="passengers">
        </passenger-count>
        <passenger-detail
            *ngFor="let passenger of passengers"
            [detail]="passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)">
        </passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor() {}
    ngOnInit() {
        this.passengers =[
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
    handleEdit(event){
        console.log(event)
    }
    handleRemove(event) {
        console.log(event)
    }
}