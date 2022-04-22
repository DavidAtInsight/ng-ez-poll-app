import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-private-poll',
    templateUrl: './private-poll.component.html',
    styleUrls: ['./private-poll.component.css']
})
export class PrivatePollComponent implements OnInit {
    searchForm = new FormGroup({
        pollId: new FormControl('', [
        Validators.required
        ])
    })

    constructor(private readonly router: Router) { }

    ngOnInit(): void {
    }

    onSubmit() {
        
    }

}
