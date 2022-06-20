"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const AnalyticSummary_1 = require("./AnalyticSummary");
// const matches = fs
//   .readFileSync("football.csv", { encoding: "utf-8" })
//   .split("\n")
//   .map((row: string): string[] => row.split(","));
const fileName = "football.csv";
const teamName = "Man United";
// Using static methods to make simple the running of the analysis
const matchReader = MatchReader_1.MatchReader.fromCSVToMatchData(fileName); // static method
matchReader.load();
const matches = matchReader.matches;
const analyticSummary = AnalyticSummary_1.AnalyticSummary.WinAnalysisWithHTMLReport(teamName, "winAnalysisReport.html");
analyticSummary.buildAndPrintResult(matches);
// const csvReader = new CSVFileReader(fileName);
// const matchReader = new MatchReader(csvReader);
// matchReader.load();
// const matches = matchReader.matches;
// const analyticSummary = new AnalyticSummary(
//   new WinsAnalysis(teamName),
//   new ConsoleReport()
// );
// analyticSummary.buildAndPrintResult(matches)
