import { CardColors } from "./card/card.component";

export interface Word {
  id: number;
  word: string;
  pos: POS;
}

export interface WordCard extends Word {
  color: CardColors;
}

export interface TestData {
  wordList: Word[];
  scoresList: number[];
}

export enum POS {
  NOUN = 'noun',
  VERB = 'verb',
  ADVERB = 'adverb',
  ADJECTIVE = 'adjective',
}
