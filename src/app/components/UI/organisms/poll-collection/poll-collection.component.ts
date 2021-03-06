import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Poll } from 'src/app/models/poll/poll.model';
import { PollService } from 'src/app/services/poll/poll.service';
import { loadUser } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-poll-collection',
    templateUrl: './poll-collection.component.html',
    styleUrls: ['./poll-collection.component.css']
})
export class PollCollectionComponent implements OnInit, OnDestroy {
    private realtimeSubscription = new Subscription();
    currentUser$ = this.store.select(selectUser);
    isLoading = true;
    userId = '';
    polls: Poll[] = [];

    @Input() isPublic?: boolean;

    constructor(private store: Store<AppState>, private pollService: PollService) { }

    ngOnInit(): void {
        this.store.dispatch(loadUser());
        this.currentUser$.subscribe(user => this.userId = user.userId);

        this.realtimeSubscription = this.pollService.realtimePolls
            .subscribe((polls: Poll[]) => {
                if (this.isPublic) {
                    this.polls = polls.filter(poll => poll.isOpen == true);
                } else {
                    this.polls = polls;
                }

                if (polls) {
                    this.isLoading = false;
                }  
            }
        );

        if (this.isPublic) {
            this.pollService.getPublicPolls();
        } else {
            this.pollService.getMyPolls(this.userId);
        }
    }

    ngOnDestroy(): void {
        if (this.realtimeSubscription) {
            this.realtimeSubscription.unsubscribe();
        }
    }

}
