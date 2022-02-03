import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  load: boolean = false

  constructor( 
    public loaderService: LoaderService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    // get data for load from service (this make no Error: NG0100 on console)
    this.loaderService.loading$.subscribe((val) => {
      this.load = val;
      this.cdr.detectChanges()
    })
  }

}
