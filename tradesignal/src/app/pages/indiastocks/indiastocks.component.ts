import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-indiastocks',
  templateUrl: './indiastocks.component.html',
  styleUrls: ['./indiastocks.component.css']
})
export class IndiastocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

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

    chart.data = [{
      "country": "Win",
      "litres": 50
    }, {
      "country": "Loss",
      "litres": 50
    }];

    let chart1 = am4core.create("chartdiv1", am4charts.PieChart);

    // Add and configure Series
    let pieSeries1 = chart1.series.push(new am4charts.PieSeries());
    pieSeries1.dataFields.value = "litres";
    pieSeries1.dataFields.category = "country";

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

    chart1.data = [{
      "country": "Win",
      "litres": 50
    }, {
      "country": "Loss",
      "litres": 50
    }];
  }

}
