import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { routesAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routesAnimation],
})
export class AppComponent {
  title = 'part-of-speech';
  avatars = ['boy', 'girl', 'dad', 'dude'];
  chosenAvatar = '';

  constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {
    // in case user went to other routes directly
    // or reloaded from them
    if (this.chosenAvatar === '') {
      this.router.navigateByUrl('/');
    }

    this.subscribeToRouter();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  onAvatarClick(chosenAvatar: string) {
    this.chosenAvatar = chosenAvatar;
  }

  private subscribeToRouter(): void {
    this.router.events.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      const reset: boolean = navigation?.extras.state?.['reset'];

      if (reset) {
        this.chosenAvatar = '';
      }
    });
  }
}
