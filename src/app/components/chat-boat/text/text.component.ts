import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() messages: any;
  @ViewChild('scroll') scroll!: ElementRef
  
  
  constructor() { }

  ngOnInit(): void {
  }

 
  ngOnChanges(changes: SimpleChanges) {
    if(changes)
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  }
 

}
