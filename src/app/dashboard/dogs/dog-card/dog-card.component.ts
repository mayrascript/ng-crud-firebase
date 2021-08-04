import {Component, Input, OnInit} from '@angular/core';
import {Dog} from '../../../core/models/dog';
import {DogsService} from '../../../core/services/dogs/dogs.service';
import {DogFormModalComponent} from '../dog-form-modal/dog-form-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {
  @Input() dog!: Dog;

  constructor(private dialog: MatDialog,
              private dogsService: DogsService) { }

  ngOnInit(): void {
  }

  showDogFormModal() {
    console.log('showDogForm');
    const dialogRef = this.dialog.open(DogFormModalComponent, {
      width: '350px',
      data: {dogId: this.dog._id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  edit() {
    if(!this.dog._id) {
      return;
    }

    this.showDogFormModal();
  }

  delete() {
    if(!this.dog._id) {
      return;
    }
    this.dogsService.remove(this.dog._id)
  }
}
