import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardColors } from '../card/card.component';
import { GameDataService } from '../game-data.service';
import { POS, WordCard } from '../testData';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css'],
})
export class PlayGroundComponent implements OnInit {
  cards!: WordCard[];
  activeCardIndex: number | undefined;
  openModal: boolean = false;
  POS = POS;

  constructor(
    private gameDataService: GameDataService,
    private router: Router
  ) {
    this.gameDataService.words.subscribe((words) => {
      this.cards = words.map((w) => ({ ...w, color: CardColors.VOID }));
    });
  }

  ngOnInit(): void {}

  onCardClick(): void {
    if (this.openModal) {
      return;
    }

    if (this.activeCardIndex === undefined) {
      this.activeCardIndex = this.cards.length - 1;
    } else {
      this.activeCardIndex--;
    }

    if (this.activeCardIndex >= 0) {
      this.openModal = true;
    } else {
      // all cards was marked
      this.finishTheGame();
    }
  }

  choosePOS(choice: POS): void {
    if (this.activeCardIndex === undefined) {
      return;
    }

    const card = this.cards[this.activeCardIndex];

    if (choice === card.pos) {
      // correct answer color, the card by it's pos color
      if (choice === POS.NOUN) {
        card.color = CardColors.NOUN;
      } else if (choice === POS.VERB) {
        card.color = CardColors.VERB;
      } else if (choice === POS.ADJECTIVE) {
        card.color = CardColors.ADJECTIVE;
      } else if (choice === POS.ADVERB) {
        card.color = CardColors.ADVERB;
      }
    } else {
      // wrong answer, color the card red
      card.color = CardColors.WRONG;
    }

    this.openModal = false;
  }

  private finishTheGame(): void {
    // calc score and send it to rank page
    const correctAnswers = this.cards.reduce(
      (correctAnswers, card) =>
        card.color !== CardColors.WRONG ? correctAnswers + 1 : correctAnswers,
      0
    );

    const score = (correctAnswers / this.cards.length) * 100;

    setTimeout(() => {
      this.router.navigateByUrl('/rank-page', {
        state: {
          score,
        },
      });
    }, 1000);
  }
}
