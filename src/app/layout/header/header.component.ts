import { Component, Inject, OnInit } from '@angular/core';


import { MenuLinks } from 'src/app/shared/_consts/menu-links';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  readonly links = MenuLinks;


  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.document.body.classList.add('ltr');
  }

}
