import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'raahi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // validateForm!: FormGroup;

  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     this.validateForm.controls[i].markAsDirty();
  //     this.validateForm.controls[i].updateValueAndValidity();
  //   }
  // }

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.validateForm = this.fb.group({
  //     userName: [null, [Validators.required]],
  //     password: [null, [Validators.required]],
  //     remember: [true]
  //   });
  // }
}
