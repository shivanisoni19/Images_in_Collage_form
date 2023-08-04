import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlightNumber]'
})
export class HighlightNumberDirective implements AfterViewInit  {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const text = this.elementRef.nativeElement.textContent;
    const words = text.split(' ');

    let highlightedText = '';
    words.forEach((word: any) => {
      const numberValue = Number(word);
      if (!isNaN(numberValue)) {
        highlightedText += `<span class="highlight">${word}</span> `;
      } else {
        highlightedText += `${word} `;
      }
    });

    this.elementRef.nativeElement.innerHTML = highlightedText;
  }

}
