import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { TabViewComponent } from '../tab-view/tab-view.component';

@Component({
  selector: 'app-modal-pop',
  templateUrl: './modal-pop.component.html',
  styleUrls: ['./modal-pop.component.scss']
})
export class ModalPopComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }
  
  showModal(){
    const viewModel = this.modalService.show(TabViewComponent,{
      windowClass : 'table-modal'
    });
  }

}
