import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() inputText!: string;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  createForm!: FormGroup;
  createFormSubs!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.resetForm();
    this.subsForm();
  }

  ngOnDestroy(): void {
    this.createFormSubs.unsubscribe();
  }

  submit(event: any) {
    this.submitForm.emit(this.createForm.value);
  }

  subsForm() {
    this.createFormSubs = this.createForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => {
        this.submitForm.emit({
          formValue: val,
        });
      });
  }

  resetForm() {
    this.createForm = new FormGroup({
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        updateOn: 'change',
      }),
    });
  }
}
