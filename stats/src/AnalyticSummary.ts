import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class AnalyticSummary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintResult(matchData: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matchData));
  }
}
