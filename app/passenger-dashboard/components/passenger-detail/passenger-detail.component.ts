import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls:['passenger-detail.component.scss'],
    template: `
        <div>
            <span 
            class="status"
            [class.checked-in]="detail.checkedIn"
            >           
            </span>
            <div *ngIf="editing" >
                <input 
                    type="text"
                    [value]="detail.fullname"
                    (edit)="handleEdit($event)"
                    (input)="onNameChange(name.value)"
                    #name
                >
            </div>
            <div *ngIf="!editing">
                {{detail.fullname}}
            </div>
            <div>           
                Children: {{ detail.children?.length || 0}}
            </div>
            <button (click)="toggleEdit()" >
                {{editing ? 'Done' : 'Edit'}}
            </button>
            <button (click)="onRemove()" >
                Remove
            </button>
        </div>
    `
})

export class PassengerDetailComponent {
    editing:boolean = false;
    
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter <any> = new EventEmitter()

    @Output()
    remove: EventEmitter <any> = new EventEmitter();


    constructor () {
    }

    onNameChange(value : string) {
        this.detail.fullname = value;
    }
    toggleEdit() {
        if(this.editing) {
            this.edit.emit(this.detail)
        }
        this.editing = !this.editing; 
    }
    onRemove() {
        this.remove.emit(this.detail);
    }
}