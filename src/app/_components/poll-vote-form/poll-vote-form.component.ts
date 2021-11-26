import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PollState} from "../../_states/poll.state";
import {Select, Store} from "@ngxs/store";
import {Choice, Poll} from "../../_models/Poll";
import {AddVote} from "../../_actions/poll.action";

@Component({
  selector: 'app-poll-vote-form',
  templateUrl: './poll-vote-form.component.html',
  styleUrls: ['./poll-vote-form.component.css']
})
export class PollVoteFormComponent implements OnInit {

  @Select(PollState.getPoll) poll$: Observable<Poll> | undefined;

  selectedChoice: string | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  trackBy(index: number, choice: Choice) {
    return choice.id;
  };

  onVoteClick() {
    this.store.dispatch(new AddVote(this.selectedChoice))
    this.selectedChoice = undefined;
  }
}
