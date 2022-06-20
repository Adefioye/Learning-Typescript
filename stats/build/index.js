"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
const WinsAnalysis_1 = require("./Analyzer/WinsAnalysis");
const ConsoleReport_1 = require("./AnalyticReport/ConsoleReport");
const AnalyticSummary_1 = require("./AnalyticSummary");
// const matches = fs
//   .readFileSync("football.csv", { encoding: "utf-8" })
//   .split("\n")
//   .map((row: string): string[] => row.split(","));
const fileName = "football.csv";
const teamName = "Man United";
const csvReader = new CSVFileReader_1.CSVFileReader(fileName);
const matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.load();
const matches = matchReader.matches;
const analyticSummary = new AnalyticSummary_1.AnalyticSummary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
analyticSummary.buildAndPrintResult(matches);
