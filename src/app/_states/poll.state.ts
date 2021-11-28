import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {AddVote} from "../_actions/poll.action";
import {Choice, Poll} from "../_models/Poll";

export interface PollStateModel {
  poll: { model: { choices: Choice[] } };
}

@Injectable()
@State({
  name: 'pollForm',
  defaults: {
    poll: {
      model: [{} as Poll],
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class PollState {

  @Selector()
  static getPoll(state: PollStateModel) {
    return state.poll.model;
  }

  @Selector()
  static getChoices(state: PollStateModel) {
    return state.poll.model.choices;
  }

  @Action(AddVote)
  addVote({getState, setState}: StateContext<PollStateModel>, {id}: AddVote) {
    const state = getState();
    const choiceList = [...state.poll.model.choices];
    const choiceIndex = choiceList.findIndex(c => c.id === id);
    const choice = choiceList[choiceIndex];
    choiceList[choiceIndex] = {...choice, value: choice.value + 1};
    setState({
      ...state,
      poll: {...state.poll.model, model: {choices: choiceList}},
    });
  }
}
