import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LifehacksComponent } from './lifehacks/lifehacks.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { HealthComponent } from './health/health.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books/:id',
    component: BooksComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'lifehacks',
    component: LifehacksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
