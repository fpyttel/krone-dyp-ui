import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

const routes: Routes = [
  {
    path: 'player/:id',
    component: PlayerComponent,
    data: { title: 'Krone-DYP | Player' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Krone-DYP | Home' }
  },
  {
    path: 'scoreboard',
    component: ScoreboardComponent,
    data: { title: 'Krone-DYP | Scoreboard' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
