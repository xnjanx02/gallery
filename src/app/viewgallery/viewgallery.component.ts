import { Component, OnInit } from '@angular/core';
import { ViewgalService } from '../viewgal.service';

@Component({
  selector: 'app-viewgallery',
  templateUrl: './viewgallery.component.html',
  styleUrls: ['./viewgallery.component.css']
})
export class ViewgalleryComponent implements OnInit {

  constructor(private api:ViewgalService) {
    api.vgal().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[ ]

}
