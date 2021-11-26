import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Poll, Vote} from "../_models/Poll";
import {Injectable} from "@angular/core";
import {AddVote, SetPoll} from "../_actions/poll.action";

export class PollStateModel {
  poll: Poll = {question: '', choices: []};
  votes: Vote[] = [];
}

@Injectable()
@State<PollStateModel>({
  name: 'poll',
  defaults: {
    poll: {question: '', choices: []},
    votes: []
  }
})
export class PollState {

  @Selector()
  static getPoll(state: PollStateModel) {
    return state.poll;
  }

  @Action(SetPoll)
  updatePoll({getState, setState}: StateContext<PollStateModel>, {payload}: SetPoll) {
    const state = getState();
    setState({
      ...state,
      poll: payload,
    });
  }

  @Action(AddVote)
  addVote({getState, setState}: StateContext<PollStateModel>, {payload}: AddVote) {
    const state = getState();
    setState({
      ...state,
      //votes: [...state.votes, payload],
    });
  }
}
