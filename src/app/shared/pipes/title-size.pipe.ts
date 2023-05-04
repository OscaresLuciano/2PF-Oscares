import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'titleSize'
})
export class TitleSizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, tamanio: number): SafeHtml {
    const fontSize = tamanio + 'px';
    const styles = `font-size: ${fontSize};`;
    const text = `<span style="${styles}">${value}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
