import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  {path: 'home', component: CharacterListComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'character/:id', loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule) },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
