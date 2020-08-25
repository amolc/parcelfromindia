import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  // pieChartOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     position: 'top',
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     callbacks: {
  //       label: function (tooltipItems, data) {
  //         return data.datasets[0].data[tooltipItems.index] + ' %';
  //       }
  //     }
  //   },
  // };
  // pieChartLabels: Label[] = ['Win', 'Loss'];

  // pieChartData: number[] = [78.09, 20.95];

  // pieChartType: ChartType = 'pie';

  // pieChartLegend = true;

  // pieChartPlugins = [];

  // pieChartColors = [
  //   {
  //     backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  //   },
  // ];

  constructor() {




  }

  ngOnInit() {

  }

}
