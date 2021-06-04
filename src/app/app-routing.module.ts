import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full',
  },
  {
    path: 'mainscreen',
    loadChildren: () =>
      import('./mainscreen/mainscreen.module').then(
        (m) => m.MainscreenPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'forgotpassword',
    loadChildren: () =>
      import('./forgotpassword/forgotpassword.module').then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: 'initialscreen',
    loadChildren: () =>
      import('./initialscreen/initialscreen.module').then(
        (m) => m.InitialscreenPageModule
      ),
  },
  {
    path: 'meal',
    loadChildren: () =>
      import('./meal/meal.module').then((m) => m.MealPageModule),
  },
  {
    path: 'cake',
    loadChildren: () =>
      import('./cake/cake.module').then((m) => m.CakePageModule),
  },
  {
    path: 'drinks',
    loadChildren: () =>
      import('./drinks/drinks.module').then((m) => m.DrinksPageModule),
  },
  {
    path: 'snacks',
    loadChildren: () =>
      import('./snacks/snacks.module').then((m) => m.SnacksPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
