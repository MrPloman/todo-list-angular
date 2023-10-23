import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodosModule } from './todos/todos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [TodosModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
