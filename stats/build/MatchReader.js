"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CSVFileReader_1 = require("./CSVFileReader");
const stringToDate_1 = require("./utils/stringToDate");
// MatchReader(filename).read()
class MatchReader extends CSVFileReader_1.CSVFileReader {
    mapRow(row) {
        return [
            (0, stringToDate_1.stringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
