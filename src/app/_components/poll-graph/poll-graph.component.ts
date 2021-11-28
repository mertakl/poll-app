import {Component, OnInit} from '@angular/core';
import {ScaleType} from "@swimlane/ngx-charts";
import {Select} from "@ngxs/store";
import {PollState} from "../../_states/poll.state";
import {Observable} from "rxjs";
import {Choice} from "../../_models/Poll";

@Component({
  selector: 'app-poll-graph',
  templateUrl: './poll-graph.component.html',
  styleUrls: ['./poll-graph.component.css']
})
export class PollGraphComponent implements OnInit {

  @Select(PollState.getChoices) choices$: Observable<Choice[]> | undefined;

  totalVotes: number = 0;

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

  constructor() {
  }

  ngOnInit(): void {
    this.choices$?.subscribe(result => {
      this.totalVotes = result?.reduce((n, {value}) => n + value, 0);
    });
  }
}
