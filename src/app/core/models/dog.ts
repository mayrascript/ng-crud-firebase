import firebase from 'firebase';

export interface Dog {
  _id?: string;
  name: string;
  age: number;
  gender: GenderEnum;
  breed: string;
  ownerName: string;
  ownerContactNumber: number;
  city: string;
  createdAt: firebase.firestore.FieldValue;
  updatedAt?: firebase.firestore.FieldValue;
  description?: string;
}

export enum GenderEnum {
  Female = 'Female',
  Male = 'Male',
}
