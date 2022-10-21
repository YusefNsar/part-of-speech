import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-rank-page',
  templateUrl: './rank-page.component.html',
  styleUrls: ['./rank-page.component.css'],
})
export class RankPageComponent implements OnInit {
  rank: number | undefined;
  message: string = '';

  constructor(
    private gameDataService: GameDataService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const score = navigation?.extras.state?.['score'];
    if (score) {
      this.gameDataService.getRank(score).subscribe((res) => {
        this.rank = res.rank;

        if (this.rank > 80) {
          this.message = 'Excellent!';
        } else if (this.rank > 50) {
          this.message = 'Good Job, you can top them!';
        } else if (this.rank > 0) {
          this.message = "Practice makes perfect, don't give up!";
        }
      });
    }
  }

  ngOnInit(): void {}

  onTryAgain(): void {
    this.router.navigateByUrl('/', { state: { reset: true } });
  }
}
