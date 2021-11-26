import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Poll} from "../_models/Poll";
import {Injectable} from "@angular/core";
import {AddChoice, DeleteChoice, UpdateChoice, UpdatePoll} from "../_actions/poll.action";

export class PollStateModel {
  poll: Poll = {question: '', choices: []};
}

@Injectable()
@State<PollStateModel>({
  name: 'poll',
  defaults: {
    poll: {question: '', choices: []}
  }
})
export class PollState {

  @Selector()
  static getPoll(state: PollStateModel) {
    return state.poll;
  }

  @Action(UpdatePoll)
  updatePoll({getState, setState}: StateContext<PollStateModel>, {payload}: UpdatePoll) {
    const state = getState();
    setState({
      ...state,
      poll: payload,
    });
  }

  @Action(AddChoice)
  addChoice({getState, patchState}: StateContext<PollStateModel>, {payload}: AddChoice) {
    const state = getState();
    const choices = state.poll.choices;
    patchState({
      poll: {...state.poll, choices: [...choices, payload]}
    });
  }

  @Action(UpdateChoice)
  updateChoice({getState, setState}: StateContext<PollStateModel>, {payload, id}: UpdateChoice) {
    const state = getState();
    const choiceList = [...state.poll.choices];
    const choiceIndex = choiceList.findIndex(item => item.id === id);
    choiceList[choiceIndex] = payload;
    setState({
      ...state,
      poll: {...state.poll, choices: [...choiceList]}
    });
  }


  @Action(DeleteChoice)
  deleteChoice({getState, setState}: StateContext<PollStateModel>, {id}: DeleteChoice) {
    const state = getState();
    const filtered = state.poll.choices.filter(item => item.id !== id);
    setState({
      ...state,
      poll: {...state.poll, choices: [...filtered]}
    });
  }
}
