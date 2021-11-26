export interface Poll {
  question: string;
  choices: Choice[];
}

export interface Choice {
  id: string;
  name: string;
  //Vote count
  value: number;
}

