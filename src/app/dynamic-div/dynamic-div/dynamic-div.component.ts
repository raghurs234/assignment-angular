import { Component, Renderer2, ViewChild, ElementRef, HostListener, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit, AfterViewInit {
  @ViewChild('dymanicDivContainer') dymanicDiv: ElementRef;
  divCount = 1;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createDynamicDiv(50);
  }

  createDynamicDiv(boxLength: number): void {
    for (let count = 0; count < boxLength; count++) {
          const div = this.renderer.createElement('div');
          const button = this.renderer.createElement('button');
          const text = this.renderer.createText('' + this.divCount);
          this.renderer.appendChild(button, text);
          this.renderer.setAttribute(div, 'class', 'custom-div');
          this.renderer.appendChild(div, button);
          this.renderer.appendChild(this.dymanicDiv.nativeElement, div);
          this.divCount++;
    }
  }

  selectedDiv(event): void{
   alert('Button ' + event.target.innerText + ' is clicked');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if ( pos >= max )   {
      this.createDynamicDiv(30);
     }
    }

}
