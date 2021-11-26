import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PollState} from "../../_states/poll.state";
import {Select} from "@ngxs/store";
import {Choice, Poll} from "../../_models/Poll";

@Component({
  selector: 'app-poll-vote-form',
  templateUrl: './poll-vote-form.component.html',
  styleUrls: ['./poll-vote-form.component.css']
})
export class PollVoteFormComponent implements OnInit {

  @Select(PollState.getPoll) poll$: Observable<Poll> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  trackBy(index: number, choice: Choice) {
    return choice.id;
  };
}
