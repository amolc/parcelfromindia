import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-planbyid',
  templateUrl: './planbyid.component.html',
  styleUrls: ['./planbyid.component.css']
})
export class PlanbyidComponent implements OnInit {
  config: any;

  data: any;
  data1 = [];
  data2 = [];
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,

    };

  }

  ngOnInit(): void {

    this.getplanlist()
    this.getsignalbyid()
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "lebal";


    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();
    console.log(chart.legend)
    // chart.data = this.data2
    chart.dataSource.url = "https://api.80startups.com/tradeSignals/getCountLatestMonth/1";
    chart.dataSource.parser = new am4core.JSONParser();
    chart.data = this.data2
    //console.log(chart.data)
    // chart.data = [{
    //   "country": "Win",
    //   "litres": 50
    // }, {
    //   "country": "Loss",
    //   "litres": 50
    // }];
    let chart1 = am4core.create("chartdiv1", am4charts.PieChart);

    // Add and configure Series
    let pieSeries1 = chart1.series.push(new am4charts.PieSeries());
    pieSeries1.dataFields.value = "value";
    pieSeries1.dataFields.category = "lebal";


    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart1.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries1.slices.template.stroke = am4core.color("#fff");
    pieSeries1.slices.template.strokeWidth = 2;
    pieSeries1.slices.template.strokeOpacity = 1;
    pieSeries1.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries1.alignLabels = false;
    pieSeries1.labels.template.bent = true;
    pieSeries1.labels.template.radius = 3;
    pieSeries1.labels.template.padding(0, 0, 0, 0);

    pieSeries1.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow1 = pieSeries1.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow1.opacity = 0;

    // Create hover state
    let hoverState1 = pieSeries1.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow1 = hoverState1.filters.push(new am4core.DropShadowFilter);
    hoverShadow1.opacity = 0.7;
    hoverShadow1.blur = 5;

    // Add a legend
    chart1.legend = new am4charts.Legend();
    chart1.legend.data = ["win", "loss", "kk"]
    //chart1.data = this.data1;
    chart1.dataSource.url = "https://api.80startups.com/tradeSignals/getCountperYear/1";
    chart1.dataSource.parser = new am4core.JSONParser();
    chart1.data = this.data1;
    // console.log(chart1.data);

    // chart1.data = [{
    //   lable: "win",
    //   value: 34
    // },
    // {
    //   lable: "loss",
    //   value: 56
    // },
    // {
    //   lable: "ongoing",
    //   value: 134
    // }]


  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  getplanlist() {
    this.data = []
    return new Promise((resolve, reject) => {

      console.log(JSON.parse(localStorage.getItem('token')).users['_id'])
      this.http.get("https://api.80startups.com/2/tradePlan/getPlanById/" + this.route.snapshot.params.id + '/' + JSON.parse(localStorage.getItem('token')).users['_id']).subscribe(result => {
        console.log("result", result);

        if (result['message'] == "no records found") {
          return alert(result['message'])
        }

        this.data = result;


      },
        err => {
          reject(err);
        }
      );
    });
  }
  getsignalbyid() {
    return new Promise((resolve, reject) => {
      this.http.get("https://api.80startups.com/tradeSignals/getallsignalsbyplanid/" + this.route.snapshot.params.id).subscribe(result => {
        console.log("result", result);
        this.data = result;

      },
        err => {
          reject(err);
        }
      );
    });
  }



}
