import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('newServerContent') newServerContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

   onAddServer(newServerNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    })

  }

  onAddBlueprint(newServerNameInput: HTMLInputElement) {
   this.blueprintCreated.emit({
      serverName: newServerNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    })
  }

}
