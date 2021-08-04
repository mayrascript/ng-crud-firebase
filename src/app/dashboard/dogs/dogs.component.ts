import { Component, OnInit } from '@angular/core';
import {DogFormModalComponent} from './dog-form-modal/dog-form-modal.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DogsService} from '../../core/services/dogs/dogs.service';
import {Observable} from 'rxjs';
import {Dog} from '../../core/models/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs$: Observable<Dog[]> = this.dogsService.dogsItems$;

  constructor(private dialog: MatDialog,
              private dogsService: DogsService) { }

  ngOnInit(): void {
  }

  showDogFormModal() {
    console.log('showDogForm');
    const dialogRef = this.dialog.open(DogFormModalComponent, {
      width: '350px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
