import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogsService } from '../../../shared/services/dogs/dogs.service';
import { DogModel } from '../models/dog.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output()
  editClicked = new EventEmitter<DogModel>();


  dogs: Observable<DogModel[]>;
  constructor(
    private dogsService: DogsService
  ) { }

  ngOnInit() {
    this.dogs = this.dogsService.getAll();
  }

  edit(dog: DogModel) {
    this.editClicked.emit(dog);
  }

  delete(dog: DogModel) {
    this.dogsService.remove(dog._id);
  }

}
