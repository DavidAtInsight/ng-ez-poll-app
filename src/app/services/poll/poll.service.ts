import { Injectable } from '@angular/core';
import { Subscription, map, Subject } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Poll } from 'src/app/models/poll/poll.model';

@Injectable({
    providedIn: 'root'
})
export class PollService {
    realtimePolls = new Subject<Poll[]>();
    private firebaseSubscriptionArray: Subscription[] = [];

    constructor(private firestore: AngularFirestore) { }

    getMyPolls(userId: string): void {
        this.firebaseSubscriptionArray.push(this.firestore
            .collection('polls', ref => 
                ref.where('userId', '==', userId))
            .snapshotChanges()
            .pipe(map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data() as Poll
                    }
                })
            }))
            .subscribe((myPolls: Poll[]) => {
                this.realtimePolls.next(myPolls as Poll[])
            }, error => {
                //error logic here...
            }));
    }

    getPublicPolls(): void {
        this.firebaseSubscriptionArray.push(this.firestore
            .collection('polls', ref => 
                ref.where('isPublic', '==', true)) 
            .snapshotChanges()
            .pipe(map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data() as Poll
                    }
                })
            }))
            .subscribe((publicPolls: Poll[]) => {
                this.realtimePolls.next(publicPolls as Poll[]);
            }, error => {
                //error logic here...
            }));
    }

    createNewPoll(poll: Poll): void {
        this.firestore.collection('polls').add(poll);
  
    }

    deletePoll(pollId: string): void {
        this.firestore.collection('polls').doc(pollId).delete();
    }

    cancelSubscriptions(): void {
        this.firebaseSubscriptionArray.forEach(subscription => subscription.unsubscribe());
    }

}
