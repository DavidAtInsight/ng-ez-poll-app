import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd/notification';

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

    constructor(private notification: NzNotificationService) { }

    ngOnInit(): void {
    }

    onSubmit(template: TemplateRef<{}>): void {
        //TEMPORARY
        this.notification.template(template, { nzDuration: 10000 });
    }

}
