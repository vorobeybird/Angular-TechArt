import { Component,EventEmitter, OnInit, Output } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService],
})
export class SearchComponent implements OnInit {

  @Output() searchUpdated = new EventEmitter<string>();


  public searchValue: string | null = null;
  private timer: any;
  private delaySearch: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  onSearchChanged(e: any) {
    console.log('Delay is set to: ' + this.delaySearch);
    if (this.delaySearch) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(e.target.value){
        this.timer = setTimeout(()=>this.searchUpdated.emit(e.target.value), 0);
      }
    } else this.searchUpdated.emit(e.target.value);
  }

  doSearch(token: string) {
    console.log('Search triggered for: ' + token);
  }

  
}
