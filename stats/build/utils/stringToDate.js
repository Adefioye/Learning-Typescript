"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (dateString) => {
    const numberArray = dateString.split("/").map((item) => {
        return parseInt(item);
    });
    return new Date(numberArray[2], numberArray[1] - 1, numberArray[0]);
};
exports.stringToDate = stringToDate;
