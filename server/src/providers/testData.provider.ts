import { readFileSync } from 'fs';
import { TestData, Word } from '../types/testData';

export class TestDataProvider {
  private static instance: TestDataProvider;
  private testData: TestData | null = null;

  private constructor() {}

  public static getInstance(): TestDataProvider {
    if (!TestDataProvider.instance) {
      TestDataProvider.instance = new TestDataProvider();
    }

    return TestDataProvider.instance;
  }

  private loadTestData(): void {
    const json = readFileSync('../../TestData.json', 'utf8');

    this.testData = JSON.parse(json);
  }

  public getWordList(): Word[] {
    if (!this.testData) {
      this.loadTestData();
    }

    return this.testData!.wordList;
  }

  public getScoresList(): number[] {
    if (!this.testData) {
      this.loadTestData();
    }

    return this.testData!.scoresList;
  }
}
