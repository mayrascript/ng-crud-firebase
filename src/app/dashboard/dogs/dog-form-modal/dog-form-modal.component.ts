import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DogsService} from '../../../core/services/dogs/dogs.service';

@Component({
  selector: 'app-dog-form-modal',
  templateUrl: './dog-form-modal.component.html',
  styleUrls: ['./dog-form-modal.component.scss']
})
export class DogFormModalComponent implements OnInit {

  dogForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<DogFormModalComponent>,
              private fb: FormBuilder,
              private dogsService: DogsService,
              @Inject(MAT_DIALOG_DATA) public data?: {dogId?: string}) { }

  ngOnInit() {

    const currentDog$ = this.data?.dogId ? this.dogsService.getById(this.data?.dogId): {};

    console.log({dog: currentDog$});

    this.dogForm = this.fb.group(
      {
        name: ['', Validators.required],
        age: ['', Validators.required],
        ownerName: ['', Validators.required],
        ownerContactNumber: ['', Validators.required],
        city: ['', Validators.required],
      }
    )
  }

  addDog() {
    console.log('addDog', this.dogForm.value);
    this.dogsService
      .add(this.dogForm.value)
      .then(res => console.log({res}))
      .catch(err => console.log({err}))
      .finally(() => this.closeModal())

  }

  closeModal() {
    this.dialogRef.close('Modal closed');
  }

}
