import { OutputTarget } from "../AnalyticSummary";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
