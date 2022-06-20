import { CSVFileReader } from "./CSVFileReader";
import { MatchData } from "./CSVFileReader";
import { MatchResult } from "../MatchResult";
import { stringToDate } from "../utils/stringToDate";

// MatchReader(filename).read()
export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
