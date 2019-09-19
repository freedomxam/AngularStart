import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alertas',
  templateUrl: './product-alertas.component.html',
  styleUrls: ['./product-alertas.component.css']
})

export class ProductAlertasComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}