import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	isCollapsed = true;

	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events.subscribe(e => {
			if (e instanceof NavigationStart) {
				this.isCollapsed = true;
			}
		});
	}

}
