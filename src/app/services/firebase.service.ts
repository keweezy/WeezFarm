import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../entity/user.model';
// import { firestore } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // userData: Observable<firebase.User>;
  // constructor(private angularFireAuth: AngularFireAuth, ) { this.userData = angularFireAuth.authState; }
  constructor(private firestore:AngularFirestore ) {}

  /* Sign up */
//   SignUp(name: string, email: string, password: string) {
//     this.angularFireAuth
//       .auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(res => {
//         console.log('You are Successfully signed up!', res);
//       })
//       .catch(error => {
//         console.log('Something is wrong:', error.message);
//       });
//   }
//   /* Sign in */
// SignIn(email: string, password: string) {
//   this.angularFireAuth
//   .auth
//   .signInWithEmailAndPassword(email, password)
//   .then(res => {
//   console.log('You are Successfully logged in!');
//   })
//   .catch(err => {
//   console.log('Something is wrong:',err.message);
//   });
//   }
  
//   /* Sign out */
//   SignOut() {
//   this.angularFireAuth
//   .auth
//   .signOut();
//   }
getUsers() {
  return this.firestore.collection('users').snapshotChanges();
}

// Store student data in firestore
createUser(user: User){
return this.firestore.collection('users').add(user);
}

// Delete a record
deleteUser(userid: string){
this.firestore.doc('users/' + userid).delete();
}

// Update student data
updateUser(user: User){
delete user.id;
this.firestore.doc('users/' + user.id).update(user);
}
}