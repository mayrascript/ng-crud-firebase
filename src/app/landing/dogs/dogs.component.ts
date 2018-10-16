import { Component, OnInit } from '@angular/core';
import { DogModel } from './models/dog.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogToEditValue: DogModel;

  constructor() { }

  ngOnInit() {
  }

  onEditClicked(dog: DogModel) {
    this.dogToEditValue = dog;
  }

}
