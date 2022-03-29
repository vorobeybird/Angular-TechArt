import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private timer: any;
  private delaySearch: boolean = true;
  public searchResults: string[] = [];
  private apiData: string[] = [];

  searchValue = new FormControl('');
  private searchSubsription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.apiData = this.dataService.result;
    this.searchSubsription.add(this.searchValue.valueChanges.subscribe((v) =>
      this.onSearchChanged(v)
    ))
  }

  ngOnDestroy(): void {
    this.searchSubsription.unsubscribe()
  }

  clearSearchValues(): void {
    this.searchResults = [];
    this.searchValue.reset();
  }

  public onValueSelect(text: string): void {
    this.searchValue.setValue(text)
    this.searchResults = [];
  }

  private findValuesByInput(searchValue: string, data: string[]): void {
    console.log(typeof searchValue);
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
        this.timer = setTimeout(() =>
          this.findValuesByInput(searchValue, this.apiData)
        );
      } else this.findValuesByInput(searchValue, this.apiData);
    }
  }
}
