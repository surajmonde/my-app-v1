import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal:NgbModal) { }
  
  show(content:any, options?: any){
    return this.ngbModal.open(content,Object.assign({
      size: 'md',
      centered: true,
      backdrop: 'static',
      backdropClass: 'modal-backdrop-class',
      keyboard:false
    },options || {}));

  }
  dismiss(reason?:string){
    this.ngbModal.dismissAll(reason);
  }
}
