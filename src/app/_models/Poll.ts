export interface Poll {
  question: string;
  choices: Choice[];
}

export interface Choice {
  id: string;
  text: string;
}

export interface Vote {
  id: string;
  text: string;
  count: number;
}

