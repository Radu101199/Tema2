import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  constructor(private modalService: NzModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: 'Modal Content',
      nzClosable: true
    });
  }

}
