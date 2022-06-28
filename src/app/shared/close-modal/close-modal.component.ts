import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-close-modal',
  templateUrl: './close-modal.component.html',
  styleUrls: ['./close-modal.component.scss']
})
export class CloseModalComponent implements OnInit {

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  close(event?: any){
    this.activeModal.close(event)

  }

}
