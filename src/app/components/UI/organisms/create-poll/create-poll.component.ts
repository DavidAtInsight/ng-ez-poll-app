import { Component, OnInit } from '@angular/core';
//import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { PollFormComponent } from '../../molecules/poll-form/poll-form.component';
import { Poll } from 'src/app/models/poll/poll.model';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  // questionsArray = new FormArray([new FormControl('', [Validators.required])]);
  // optionsArray = new FormArray([new FormControl('', [Validators.required])]);
  // addQuestionsForm = new FormGroup({
  //   questions: this.questionsArray,
  //   options: this.optionsArray
  // })
  // createPollForm = new FormGroup({
  //   pollName: new FormControl('', [Validators.required]),
  //   pollDescription: new FormControl('', [Validators.required]),
  //   isOpen: new FormControl(''),
  //   isPublic: new FormControl(''),
  //   questions: this.questionsArray,
  //   options: this.optionsArray
  // })
  // pollData?: Poll;
  // questionNumber = 1;
  // questionNumberArray: number[] = [];
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
    //this.questionNumberArray.push(this.questionNumber);
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

  // addQuestion(): void {
  //   this.questionsArray.push(new FormControl('', Validators.required));
  // }

  // addOption(): void {
  //   this.optionsArray.push(new FormControl('', Validators.required));
  // }

}
