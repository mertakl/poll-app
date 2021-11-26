import {Poll} from "../_models/Poll";

export class SetPoll {
  static readonly type = '[Poll] Set Poll';

  constructor(public payload: Poll) {
  }
}

export class AddVote {
  static readonly type = '[Vote] Add Vote';

  constructor(public id: string | undefined) {
  }
}

export class ResetState {
  static readonly type = '[AppState] Reset App State';

  constructor() {
  }
}
