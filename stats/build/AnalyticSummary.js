"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticSummary = void 0;
class AnalyticSummary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintResult(matchData) {
        this.outputTarget.print(this.analyzer.run(matchData));
    }
}
exports.AnalyticSummary = AnalyticSummary;
