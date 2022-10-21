import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { RankPageComponent } from './rank-page/rank-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { animation: 'HomePage' } },
  {
    path: 'play-ground',
    component: PlayGroundComponent,
    data: { animation: 'PlayGround' },
  },
  {
    path: 'rank-page',
    component: RankPageComponent,
    data: { animation: 'RankPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
