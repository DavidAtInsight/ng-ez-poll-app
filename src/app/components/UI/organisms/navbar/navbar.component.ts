import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //let { Title } = Typography;
  //let { width } = useWindowDimensions() //replace with ng resize method
  isAuth: boolean = false; //temporary

  constructor() { }

  ngOnInit(): void {
  }

}
