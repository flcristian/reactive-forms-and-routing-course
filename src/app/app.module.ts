import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReusableFormComponent } from './reusable-form/reusable-form.component';
import {FieldsetModule} from "primeng/fieldset";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    ReusableFormComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    MessageModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
