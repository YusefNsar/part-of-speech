export interface TestData {
  wordList: Word[];
  scoresList: number[];
}

export interface Word {
  id: number;
  word: string;
  pos: POS;
}

export enum POS {
  NOUN = 'noun',
  VERB = 'verb',
  ADVERB = 'adverb',
  ADJECTIVE = 'adjective',
}
