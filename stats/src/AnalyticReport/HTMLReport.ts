import fs from "fs";
import { OutputTarget } from "../AnalyticSummary";

export class HTMLReport implements OutputTarget {
  constructor(public reportFileName: string) {}

  print(report: string): void {
    const htmlReport = `
            <div>
                <h1> Analysis Report</h1>
                <p>${report}</p>
            </div>
        `;

    fs.writeFileSync(this.reportFileName, htmlReport);
  }
}
