import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Dog} from '../../../core/models/dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {
  @Input() dogs$!: Observable<Dog[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
