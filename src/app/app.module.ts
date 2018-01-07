import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LifehacksComponent } from './lifehacks/lifehacks.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { HealthComponent } from './health/health.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    LifehacksComponent,
    BooksComponent,
    CartComponent,
    HealthComponent,
    RegisterComponent,
    LoginComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMBK453OcOfL1FiU6zLOZ4IJuLeuUIcCI'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
