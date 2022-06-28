import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/model/data';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Data[] = [];
  name: any;
  key: string = 'name';
  reverse: boolean = false;
  p: number = 1;
  dataForm: FormGroup;

  constructor(public service: ServiceService, private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      webReference: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  /* To get the data */

  getData() {
    try {
      this.service.getData().subscribe((response) => {
        this.data = response;
      })
    } catch (error) {
      console.log(error);
    }
  }

  /* To search the data */

  Search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  /* To sort the data */

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  /* To check or unchecked the rows */

  checkAllCheckBox(ev: any) {
    this.data.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.data.every(p => p.checked);
  }

  /* To add the data */

  public addItem(): void {
    try {
      this.service.addData(this.dataForm.value).subscribe((response) => {
        console.log('data has been added');
      })
      this.dataForm.reset();
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  /* To reset the form */

  public reset() {
    this.dataForm.reset();
  }

  /* To delete the data */
  deleteItem() {
    try {
      const selectedData = this.data.filter(data => data.checked).map(p => p.id);
      selectedData.forEach(element => {
        this.service.deleteData(element).subscribe(() => {
        })
      });
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }
}
