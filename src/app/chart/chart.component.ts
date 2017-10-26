import { Component, OnInit } from '@angular/core';
import { TdDigitsPipe } from '@covalent/core';

import { single, multi } from '../data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';

  colorScheme: any = {
    domain: ['#BF360C', '#EF6C00', '#FB8C00', '#FFB300', '#FFCA28', '#FFF176'],
  };

  // line, area
  autoScale = true;

  constructor() {

      // Chart Single
    Object.assign(this, {single});
    // Chart Multi
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }

  ngOnInit() {
  }

  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }

}
