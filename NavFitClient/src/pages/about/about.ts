import { Component } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PDFAnnotationData } from 'pdfjs-dist';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  template: '<pdf-viewer id="viewer" [src]="pdfSrc"></pdf-viewer>',
})
export class AboutPage {
  readonly dpiRatio = 96 / 72;
  pdfSrc = './assets/NAVPERS_1616-26_Rev11-11.pdf';

  private addInput(annotation: PDFAnnotationData, rect: number[] = null): void {
    // add input to page
    console.log(annotation);
  }

  loadComplete(pdf: PDFDocumentProxy): void {
    for (let i = 1; i <= pdf.numPages; i++) {

      // track the current page
      let currentPage = null;
      pdf.getPage(i).then(p => {
        currentPage = p;

        // get the annotations of the current page
        return p.getAnnotations();
      }).then(ann => {

        // ugly cast due to missing typescript definitions
        // please contribute to complete @types/pdfjs-dist
        const annotations = (<any>ann) as PDFAnnotationData[];

        annotations
          .filter(a => a.subtype === 'Widget') // get the form field annotation only
          .forEach(a => {

            // get the rectangle that represent the single field
            // and resize it according to the current DPI
            const fieldRect = currentPage.getViewport(this.dpiRatio)
              .convertToViewportRectangle(a.rect);

            // add the corresponding input
            this.addInput(a, fieldRect);
          });
      });
    }
  }

  constructor() {}

}
