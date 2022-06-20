import { stringToDate } from "./utils/stringToDate";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CSVFileReader } from "./CSVFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static fromCSVToMatchData(filename: string): MatchReader {
    const csvReader = new CSVFileReader(filename)
    return new MatchReader(csvReader)
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
