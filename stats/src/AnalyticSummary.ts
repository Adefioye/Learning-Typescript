import { MatchData } from "./MatchData";
import { HTMLReport } from "./AnalyticReport/HTMLReport";
import { WinsAnalysis } from "./Analyzer/WinsAnalysis";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class AnalyticSummary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static WinAnalysisWithHTMLReport(teamName: string, reportFileName: string): AnalyticSummary {
    return new AnalyticSummary(new WinsAnalysis(teamName), new HTMLReport(reportFileName))
  }

  buildAndPrintResult(matchData: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matchData));
  }
}
