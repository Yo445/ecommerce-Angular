import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SideBarComponent } from "./Components/side-bar/side-bar.component";
import { HomeComponent } from "./Components/home/home.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    RouterOutlet,
    MatButtonModule,
    SideBarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
],
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',

})
export class AppComponent {


}
