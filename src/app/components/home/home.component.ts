import { Component, OnInit} from '@angular/core';
import { MatGridAvatarCssMatStyler } from '@angular/material/grid-list';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: Number;
  public selectedindex: number = 0;
  public images = ["../../../assets/imagem/slide1.jpg","../../../assets/imagem/slide2.jpg","../../../assets/imagem/slide3.jpg",
  "../../../assets/imagem/slide4.jpg"];
 
  selectImage(index: number) {
    console.log("Index: " + index);
    this.selectedindex = index;
    console.log("Selected Index: " + this.selectedindex);
  }

  teste(){ 
    let i=1;
    setInterval(() => {
      if(i<=3){
        this.selectImage(i);
        i++;
      }else{
        i=0;
      }
    }, 5000);
    
  }
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.role = 1;
  }

  ngOnInit() {
    this.teste();
  }
   
}
