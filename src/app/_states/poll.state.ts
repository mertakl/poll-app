import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {AddVote} from "../_actions/poll.action";

@Injectable()
@State({
  name: 'pollForm',
  defaults: {
    poll: {
      model: [],
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class PollState {

  @Selector()
  static getPoll(state: any) {
    return state.poll.model;
  }

  @Selector()
  static getChoices(state: any) {
    return state.poll.model.choices;
  }

  @Action(AddVote)
  addVote({getState, setState}: StateContext<any>, {id}: AddVote) {
    const state = getState();
    const choiceList = [...state.poll.model.choices];
    const choiceIndex = choiceList.findIndex(c => c.id === id);
    choiceList[choiceIndex] = {...choiceList[choiceIndex], value: choiceList[choiceIndex].value + 1};
    const model = {choices: choiceList};
    setState({
      ...state,
      poll: {...state.poll.model, model},
    });
  }
}
