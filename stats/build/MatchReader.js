"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const stringToDate_1 = require("./utils/stringToDate");
const CSVFileReader_1 = require("./CSVFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    static fromCSVToMatchData(filename) {
        const csvReader = new CSVFileReader_1.CSVFileReader(filename);
        return new MatchReader(csvReader);
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, stringToDate_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
