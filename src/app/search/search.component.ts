import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
    this.searchSubsription.add(
      this.searchValue.valueChanges
        .pipe(debounceTime(300))
        .subscribe((value) => this.findValuesByInput(value, this.apiData))
    );
  }

  ngOnDestroy(): void {
    this.searchSubsription.unsubscribe();
  }

  clearSearchValues(): void {
    this.searchResults = [];
    this.searchValue.reset();
  }

  public onValueSelect(text: string): void {
    this.searchValue.setValue(text);
    this.searchResults = [];
  }

  private findValuesByInput(searchValue: string, data: string[]): void {
    console.log(typeof searchValue);
    const filteredSearch = data.filter((item) => item.startsWith(searchValue));
    this.searchResults = filteredSearch;
  }
}
