export interface Poll {
  question: string;
  choices: Choice[];
}

export interface Choice {
  id: number;
  text: string;
}

