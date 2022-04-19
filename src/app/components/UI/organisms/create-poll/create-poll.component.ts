import { Component, Input, OnInit } from '@angular/core';
//import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { PollFormComponent } from '../../molecules/poll-form/poll-form.component';
import { Poll } from 'src/app/models/poll/poll.model';
import { User } from 'src/app/models/auth/user.model';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  // pollData?: Poll;
  isVisible = false;

  @Input() appUser?: User;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  createPoll(): void {
    this.isVisible = false;
  }

  cancelCreate(): void {
    this.isVisible = false;
  }

}
