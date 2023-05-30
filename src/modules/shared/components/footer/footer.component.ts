import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private fb: FormBuilder) {}

  getAppForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
  });
  onSubmit() {
    console.log(this.getAppForm.value);
  }
}
