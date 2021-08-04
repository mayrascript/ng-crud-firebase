import {Component, Input, OnInit} from '@angular/core';
import {Dog} from '../../../core/models/dog';
import {DogsService} from '../../../core/services/dogs/dogs.service';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {
  @Input() dog!: Dog;

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
  }

  delete() {
    if(!this.dog._id) {
      return;
    }
    this.dogsService.remove(this.dog._id)
  }
}
