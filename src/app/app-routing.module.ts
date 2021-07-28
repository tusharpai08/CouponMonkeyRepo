import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'coupons', loadChildren: () => import('./coupons/coupons.module').then( m => m.CouponsPageModule)},
  {path: 'popup', loadChildren: () => import('./popup/popup.module').then( m => m.PopupPageModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
