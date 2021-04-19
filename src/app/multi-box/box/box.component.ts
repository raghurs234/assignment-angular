import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }
  @ViewChild('box') child: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChildDiv();
  }

  createChildDiv(): void {
    const boxes = 6;
    for (let count = 0; count <= boxes; count++) {
      const childElement = this.getLastChild(this.child.nativeElement);
      const div = this.renderer.createElement('div');
      if (boxes === count) {
        const text = this.renderer.createText('Banner Text');
        const span = this.renderer.createElement('span');
        this.renderer.appendChild(span, text);
        this.renderer.setAttribute(span, 'class', 'animation');
        this.renderer.appendChild(div, span);
      }
      this.renderer.appendChild(childElement, div);
    }
  }

  getLastChild(element: any): any {
    let isLastElemnt = false;
    while (!isLastElemnt) {
      if (element.lastChild) {
        element = element.lastChild;
      }else {
        isLastElemnt = true;
      }
    }
    console.log(element);
    return element;
  }

}
