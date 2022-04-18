import { Component, Input, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll/poll.model';

@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.css']
})
export class PollCardComponent implements OnInit {
  @Input() poll?: Poll;

  constructor() { }

  ngOnInit(): void {
  }

}
