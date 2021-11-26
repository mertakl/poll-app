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

  @Selector()
  static getVotes(state: PollStateModel) {
    return state.votes;
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
  addVote({getState, setState}: StateContext<PollStateModel>, {id}: AddVote) {
    const state = getState();
    const voteList = [...state.votes];
    const voteIndex = voteList.findIndex(v => v.id === id);
    if (voteIndex >= 0) {
      voteList[voteIndex] = {...voteList[voteIndex], value: voteList[voteIndex].value + 1};
      setState({
        ...state,
        votes: voteList,
      });
    } else {
      const choice = state.poll.choices.find(c => c.id === id);
      const vote = {id: choice?.id, name: choice?.text, value: 1} as Vote;
      setState({
        ...state,
        votes: [...state.votes, vote],
      });
    }
  }
}
