import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/switchMap'

import { PassengerDashboardService } from "../../passenger-dashboard.service";

import { Passenger } from "../../models/passenger.interface";


@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <passenger-form
                [detail] = "passenger"
                (update) = "onUpdatePassenger($event)"
                >
            </passenger-form>
        </div>
    `
})

export class PassengerViewerComponent implements OnInit {
    passenger: Passenger

    constructor(
        private routeer: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
        ) {}

    ngOnInit() {
        this.route.params.subscribe((data) => {console.log(data)})
        this.passengerService.getPassenger(1).subscribe((data: Passenger) => this.passenger = data)
    }
    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event)
            })
    }
}