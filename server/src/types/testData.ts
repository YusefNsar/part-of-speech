export interface TestData {
  wordList: Word[];
  scoresList: number[];
}

export interface Word {
  id: string;
  word: string;
  pos: POS;
}

export enum POS {
  NOUN = 'noun',
  VERB = 'verb',
  ADVERB = 'adverb',
  ADJECTIVE = 'adjective',
}
