import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  scrolled = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  pageList = [
    {
      'title': 'Page one',
      'path': 'home'
    },
    {
      'title': 'Page two',
      'path': 'page-two'
    }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener('document:scroll', ['$event'])
  onDocumentMousewheelEvent(event) {
    const position = window.pageYOffset;
    if (position >= 70) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

}
