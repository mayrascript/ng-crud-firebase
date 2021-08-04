import firebase from 'firebase';

export interface Dog {
  name: string;
  age: number;
  ownerName: string;
  ownerContactNumber: number;
  city: string;
  createdAt: firebase.firestore.FieldValue;
  updatedAt?: firebase.firestore.FieldValue;
}
