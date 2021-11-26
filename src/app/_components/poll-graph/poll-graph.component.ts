import {Component, OnInit} from '@angular/core';
import {ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-poll-graph',
  templateUrl: './poll-graph.component.html',
  styleUrls: ['./poll-graph.component.css']
})
export class PollGraphComponent implements OnInit {
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Choices';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Votes';
  colorScheme = {
    name: '',
    selectable: false,
    group: ScaleType.Ordinal,
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  public single = [
    {
      "name": "Test Choice",
      "value": 1
    },
    {
      "name": "Test Choice 2",
      "value": 2
    },
    {
      "name": "Test Choice 3",
      "value": 3
    },
    {
      "name": "Test Choice 4",
      "value": 4
    },
    {
      "name": "Test Choice 5",
      "value": 5
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
