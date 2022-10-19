import { Request, Response, Router } from 'express';
import { TestDataService } from '../services/testData.service';
import { EmptyObject, Handler } from '../types/express';
import { Word } from '../types/testData';

const appRouter = Router();
const testDataService = new TestDataService();

const getWordsHandler: Handler<EmptyObject, Word[]> = (req, res) => {
  res.json(testDataService.getTenRandomWords());
};
appRouter.route('/').get((req, res) => res.send('POS Game API.'))
appRouter.route('/words').get(getWordsHandler);

const getRankHandler: Handler<{ newScore: number }, { rank: number }> = (
  req,
  res,
) => {
  const newScore = req.body.newScore;
  if (!newScore && newScore !== 0) {
    res.sendStatus(400);
  }
  res.json({
    rank: testDataService.getRank(req.body.newScore),
  });
};
appRouter.route('/rank').get(getRankHandler);

export { appRouter };
