import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { WordCard } from '../testData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() card!: WordCard;
  @Input() index!: number;
  @Input() activeCardIndex!: number;

  active!: boolean;
  positioning!: { top: string; right: string; translate?: string };
  cardClass!: string;

  constructor() {}

  ngOnInit(): void {
    const color = this.card.color;
    this.cardClass = CardClassMap[color];
  }

  ngOnChanges(): void {
    this.calcCardPosition();
  }

  private calcCardPosition(): void {
    this.active = this.index === this.activeCardIndex;

    if (this.activeCardIndex < 0 && this.card.color === CardColors.WRONG) {
      // wrong cards go down after finishing cards
      this.positioning = {
        top: '1500px',
        right: '175px',
      };
    } else {
      // active card in center and list other cards on top of each others
      this.positioning = !this.active
        ? {
            top: `${150 + 5 * this.index}px`,
            right: `${200 - 5 * this.index}px`,
          }
        : {
            top: '50%',
            right: '50%',
            translate: '50% -50%',
          };
    }
  }
}

export enum CardColors {
  NOUN = '#fdc259',
  VERB = '#78cbcf',
  ADJECTIVE = '#14748a',
  ADVERB = '#e96869',
  VOID = '#8f8f8f',
  WRONG = '#ff3333',
}

const CardClassMap = {
  [CardColors.NOUN]: 'N',
  [CardColors.VERB]: 'V',
  [CardColors.ADJECTIVE]: 'adJ',
  [CardColors.ADVERB]: 'adV',
  [CardColors.WRONG]: 'W',
  [CardColors.VOID]: '?',
};
