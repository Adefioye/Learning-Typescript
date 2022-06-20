import fs from "fs";
import { MatchResult } from "../MatchResult";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export abstract class CSVFileReader<T> {
  data: T[] = [];
  abstract mapRow(row: string[]): T;

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
