export class AddVote {
  static readonly type = '[Vote] Add Vote';

  constructor(public id: string | undefined) {
  }
}
