import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DogsService } from '../../../shared/services/dogs/dogs.service';
import { DogModel } from '../models/dog.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnChanges {

  @Input() dogToEdit: DogModel;

  createDogForm: FormGroup;
  dog: DogModel;
  btnText = 'CREATE';
  editForm = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private dogsService: DogsService) { }

  ngOnInit() {
    this.createDogForm = this.formBuilder.group({
      name: [ '', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dogToEdit.currentValue && typeof changes.dogToEdit.currentValue === 'object') {
      this.dog = changes.dogToEdit.currentValue;
      console.log(this.dog)
      this.setValue(this.dog);
      this.btnText = 'UPDATE';
      this.editForm = true;
    }
  }

  setValue(dog: DogModel) {
    this.createDogForm.setValue({name: dog.name, description: dog.description});
  }

  get name() { return this.createDogForm.get('name'); }

  get description() { return this.createDogForm.get('description'); }

  onSubmit() {

    if (this.createDogForm.invalid) {
      return;
    }

    const name = this.createDogForm.get('name').value;
    const description = this.createDogForm.get('description').value;

    if (this.editForm) {
      this.dog['name'] = name;
      this.dog['description'] = description;
      this.dogsService.update(this.dog._id, this.dog);
    } else {
      this.dog = {
        name: name,
        description: description
      }
      this.dogsService.add(this.dog);
    }
  }

  cleanForm() {
    this.dog = undefined;
    this.createDogForm.setValue({name: '', description: ''});
    this.btnText = 'CREATE';
    this.editForm = false;
  }

}
