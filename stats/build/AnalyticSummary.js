"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticSummary = void 0;
const HTMLReport_1 = require("./AnalyticReport/HTMLReport");
const WinsAnalysis_1 = require("./Analyzer/WinsAnalysis");
class AnalyticSummary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static WinAnalysisWithHTMLReport(teamName, reportFileName) {
        return new AnalyticSummary(new WinsAnalysis_1.WinsAnalysis(teamName), new HTMLReport_1.HTMLReport(reportFileName));
    }
    buildAndPrintResult(matchData) {
        this.outputTarget.print(this.analyzer.run(matchData));
    }
}
exports.AnalyticSummary = AnalyticSummary;
