import { TestDataProvider } from '../providers/testData.provider';
import { POS, Word } from '../types/testData';
import { getRandomInteger, roundNearest100th } from '../utils/random';

export class TestDataService {
  constructor(
    private provider: TestDataProvider = TestDataProvider.getInstance(),
  ) {}

  public getTenRandomWords(): Word[] {
    const words = this.provider.getWordList();

    const randomWords: Word[] = [];
    const counter: POSCounter = {
      [POS.NOUN]: 0,
      [POS.VERB]: 0,
      [POS.ADJECTIVE]: 0,
      [POS.ADVERB]: 0,
    };

    let randomPostion = getRandomInteger(0, words.length - 1);
    for (const _ in Array.from(' '.repeat(10))) {
      while (!this.validRandom(words, counter, randomPostion, randomWords)) {
        randomPostion = getRandomInteger(0, words.length - 1);
      }
      randomWords.push(words[randomPostion]);
      counter[words[randomPostion].pos]++;
      randomPostion = getRandomInteger(0, words.length - 1);
    }

    return randomWords;
  }


  // Ensure that the random words have at least one of each POS
  private validRandom(
    words: Word[],
    counter: POSCounter,
    newRandom: number,
    selectedWords: Word[],
  ): boolean {
    const selectedWord = words[newRandom];

    // new word is not repeated
    if (selectedWords.includes(selectedWord)) {
      return false;
    }

    // every time there can't be a POS with more than 2 words while another
    // doesn't have any, because num of selected words should be 10 this
    // will ensure the rule stated above the function while being truly random
    const counterCopy = { ...counter };
    counterCopy[selectedWord.pos]++;

    const counterValues = Object.values(counterCopy).sort((a, b) => b - a); // DESC
    const biggestDiffBetweenPOSs = counterValues[0] - counterValues[3]; // max POS - min POS
    return biggestDiffBetweenPOSs <= 2;
  }
}

type POSCounter = {
  [key in POS]: number;
};
