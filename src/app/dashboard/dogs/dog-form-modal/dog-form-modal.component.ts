import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DogsService} from '../../../core/services/dogs/dogs.service';
import {EMPTY, iif, Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {Dog, GenderEnum} from '../../../core/models/dog';
import {DogBreedsService} from '../../../core/services/dogs/dog-breeds.service';

@Component({
  selector: 'app-dog-form-modal',
  templateUrl: './dog-form-modal.component.html',
  styleUrls: ['./dog-form-modal.component.scss']
})
export class DogFormModalComponent implements OnInit {

  dogForm!: FormGroup;

  genderEnum = GenderEnum;
  breeds$ = this.dogBreedsService.getAll();

  constructor(public dialogRef: MatDialogRef<DogFormModalComponent>,
              private fb: FormBuilder,
              private dogBreedsService: DogBreedsService,
              private dogsService: DogsService,
              @Inject(MAT_DIALOG_DATA) public data?: {dogId?: string}) { }

  ngOnInit() {

    this.dogForm = this.fb.group(
      {
        name: [ '', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required],
        breed: ['', Validators.required],
        description: [''],
        ownerName: [ '', Validators.required],
        ownerContactNumber: ['', Validators.required],
        city: ['', Validators.required],
      }
    )

    // Operador iif, para validar si existe el dogId y pre cargar los datos en el formulario.
    iif(
      () => this.data?.dogId != null,
      this.dogsService.getById(this.data?.dogId!),
      EMPTY,
    ).subscribe(item => {
      this.dogForm.controls.name.setValue((item as Dog).name);
      this.dogForm.controls.age.setValue((item as Dog).age);
      this.dogForm.controls.gender.setValue((item as Dog).gender);
      this.dogForm.controls.breed.setValue((item as Dog).breed);
      this.dogForm.controls.description.setValue((item as Dog).description);
      this.dogForm.controls.ownerName.setValue((item as Dog).ownerName);
      this.dogForm.controls.ownerContactNumber.setValue((item as Dog).ownerContactNumber);
      this.dogForm.controls.city.setValue((item as Dog).city);
    })
  }

  addDog() {
    this.data?.dogId != null
      // Si existe el `dogId` es por que deseamos editar el elemento actual
      ? this.update(this.data?.dogId)
      // De lo contrario, queremos añadir un nuevo elemento
      : this.create();
  }

  closeModal() {
    this.dialogRef.close('Modal closed');
  }

  private update(dogId: string) {
    this.dogsService
      .update(dogId, this.dogForm.value)
      .then(res => console.log({res}))
      .catch(err => console.log({err}))
      .finally(() => this.closeModal())
  }

  private create() {
    this.dogsService
      .add(this.dogForm.value)
      .then(res => console.log({res}))
      .catch(err => console.log({err}))
      .finally(() => this.closeModal())
  }

}
