import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Word } from './testData';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  words!: Observable<Word[]>;
  currentRank: number | undefined;

  constructor(private httpClient: HttpClient) {
    this.words = httpClient.get<Word[]>(`${environment.serverURL}/words`);
  }

  getRank(score: number): Observable<{ rank: number }> {
    const rank = this.httpClient.post<{ rank: number }>(
      `${environment.serverURL}/rank`,
      {
        newScore: score,
      }
    );

    rank.subscribe((res) => (this.currentRank = res.rank));

    return rank;
  }
}
