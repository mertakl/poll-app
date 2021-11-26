import {Choice, Poll} from "../_models/Poll";

export class SetPoll {
  static readonly type = '[Poll] Set';

  constructor(public payload: Poll) {
  }
}

export class AddVote {
  static readonly type = '[Vote] Add';

  constructor(public payload: Choice) {
  }
}
