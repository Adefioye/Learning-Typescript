import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { WinsAnalysis } from "./Analyzer/WinsAnalysis";
import { ConsoleReport } from "./AnalyticReport/ConsoleReport";
import { AnalyticSummary } from "./AnalyticSummary";

// const matches = fs
//   .readFileSync("football.csv", { encoding: "utf-8" })
//   .split("\n")
//   .map((row: string): string[] => row.split(","));
const fileName = "football.csv";
const teamName = "Man United";

// Using static methods to make simple the running of the analysis

const matchReader = MatchReader.fromCSVToMatchData(fileName) // static method
matchReader.load()
const matches = matchReader.matches 

const analyticSummary = AnalyticSummary.WinAnalysisWithHTMLReport(teamName, "winAnalysisReport.html")
analyticSummary.buildAndPrintResult(matches)

// const csvReader = new CSVFileReader(fileName);
// const matchReader = new MatchReader(csvReader);
// matchReader.load();
// const matches = matchReader.matches;
// const analyticSummary = new AnalyticSummary(
//   new WinsAnalysis(teamName),
//   new ConsoleReport()
// );
// analyticSummary.buildAndPrintResult(matches)

