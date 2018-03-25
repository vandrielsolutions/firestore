import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface firestorecollectionPosts {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  postsFirestorecollection: AngularFirestoreCollection<firestorecollectionPosts>;
  postsObservable: Observable<firestorecollectionPosts[]>;
  submitTitle: string;
  submitContent: string;
  constructor(private afs: AngularFirestore) {}
  ngOnInit() {
    this.postsFirestorecollection = this.afs.collection('fscPosts');
    this.postsObservable = this.postsFirestorecollection.valueChanges();
  }
  addPost() {
    this.afs.collection('fscPosts').add({'title': this.submitTitle, 'content': this.submitContent});
  }
} 
