import { TestDataProvider } from '../providers/testData.provider';

export class TestDataService {
  constructor(
    private provider: TestDataProvider = TestDataProvider.getInstance(),
  ) {}

}

