import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  @Input() public searchText: string = '';
  @Output() textSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onTextSelected(searchText: string) {
    console.log(searchText)
    this.textSelected.emit(searchText);
  }
}
