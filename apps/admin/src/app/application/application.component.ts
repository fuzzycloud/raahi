import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'raahi-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less'],
})
export class ApplicationComponent implements OnInit {
  isCollapsed = false;
  constructor() {}
  year = new Date().getFullYear();
  ngOnInit(): void {}
}
