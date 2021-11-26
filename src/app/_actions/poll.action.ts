import {Choice, Poll} from "../_models/Poll";

export class UpdatePoll {
  static readonly type = '[Poll] Update';

  constructor(public payload: Poll) {
  }
}

export class AddChoice {
  static readonly type = '[Choice] Add';

  constructor(public payload: Choice) {
  }
}

export class UpdateChoice {
  static readonly type = '[Choice] Update';

  constructor(public payload: Choice, public id: number) {
  }
}

export class DeleteChoice {
  static readonly type = '[Choice] Delete';

  constructor(public id: number) {
  }
}
