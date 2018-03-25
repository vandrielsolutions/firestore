import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCQLnAC2mgDn-iInPeNLCL-eLoUbQGz6a8",
  authDomain: "firestore-952ab.firebaseapp.com",
  databaseURL: "https://firestore-952ab.firebaseio.com",
  projectId: "firestore-952ab",
  storageBucket: "firestore-952ab.appspot.com",
  messagingSenderId: "361041732352"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }