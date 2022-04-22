import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Poll } from 'src/app/models/poll/poll.model';
import { PollService } from 'src/app/services/poll/poll.service';

@Component({
    selector: 'app-poll-card',
    templateUrl: './poll-card.component.html',
    styleUrls: ['./poll-card.component.css']
})
export class PollCardComponent implements OnInit {
    @Input() poll?: Poll;
    @Input() isPublic?: boolean;

    constructor(private pollService: PollService, private notification: NzNotificationService) { }

    ngOnInit(): void {
    }

    //TEMPORARY
    temporaryNotification(template: TemplateRef<{}>): void {
        this.notification.template(template, { nzDuration: 10000 });
    }

    deletePoll(pollId: string | undefined) {
        if (pollId){
            this.pollService.deletePoll(pollId);
        }
    }

}
