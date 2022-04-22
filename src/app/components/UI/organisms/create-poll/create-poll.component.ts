import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-poll',
    templateUrl: './create-poll.component.html',
    styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
    isVisible = false;

    constructor() { }

    ngOnInit(): void {
    }

    showModal(): void {
        this.isVisible = true;
    }

    cancelCreate(): void {
        this.isVisible = false;
    }

}
