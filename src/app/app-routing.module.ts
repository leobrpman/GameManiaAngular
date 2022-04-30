import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipsComponent } from './views/equips/equips.component';
import { GamesComponent } from './views/games/games.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "games", component: GamesComponent },
  { path: "equips", component: EquipsComponent },
  { path: "login", component: LoginComponent },
  { path: "pcgamer", component: PcgamerComponent },
  { path: "notFound", component: NotFoundComponent},
  { path: "**", redirectTo: "notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
