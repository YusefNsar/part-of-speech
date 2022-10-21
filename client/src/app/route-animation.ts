import {
  transition,
  trigger,
  style,
  query,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const routesAnimation = trigger('routesAnimation', [
  transition(
    'HomePage => PlayGround, HomePage => RankPage, PlayGround => RankPage',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('400ms ease-out', style({ left: '-100%' }))]),
        query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
      ]),
    ]
  ),
  transition('RankPage => PlayGround, RankPage => HomePage, PlayGround => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('400ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
  ]),
]);
