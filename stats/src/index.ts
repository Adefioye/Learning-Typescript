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

const csvReader = new CSVFileReader(fileName);
const matchReader = new MatchReader(csvReader);
matchReader.load();
const matches = matchReader.matches;
const analyticSummary = new AnalyticSummary(
  new WinsAnalysis(teamName),
  new ConsoleReport()
);
analyticSummary.buildAndPrintResult(matches)

