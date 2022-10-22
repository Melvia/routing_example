import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  id: number | undefined;
  // private subscription: Subscription;
  constructor(private route: ActivatedRoute) {
    //вариант 1
    //this.id = activateRoute.snapshot.params['id'];
    //вариант 2
    // this.subscription = activateRoute.params.subscribe(
    //   (params) => (this.id = params['id'])
    // );
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => (this.id = +data));
  }
}
