import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public searchValue: string | null = null;
  private timer: any;
  private delaySearch: boolean = true;
  public searchResults: string[] = [];
  private apiData: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.apiData = this.dataService.result;
  }

  clearSearchValues(): void {
    this.searchResults = [];
    this.searchValue = null;
  }

  public onValueSelect(text: string): void {
    this.searchValue = text;
    this.searchResults = [];
  }

  public onSearchChange(e: any) {
    this.searchValue = e.target.value;
  }

  private findValuesByInput(searchValue: string, data: string[]): void {
    console.log(typeof(searchValue))
    const filteredSearch = data.filter((item) => item.startsWith(searchValue));
    this.searchResults = filteredSearch;
  }

  public onSearchChanged(searchValue: string | null) {
    console.log('Delay is set to: ' + this.delaySearch);
    if (searchValue) {
      if (this.delaySearch) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(
          () => this.findValuesByInput(searchValue, this.apiData),
          0
        );
      } else this.findValuesByInput(searchValue, this.apiData);
    }
  }
}
