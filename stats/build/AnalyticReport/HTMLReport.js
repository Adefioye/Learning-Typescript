"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HTMLReport {
    constructor(reportFileName) {
        this.reportFileName = reportFileName;
    }
    print(report) {
        const htmlReport = `
            <div>
                <h1> Analysis Report</h1>
                <p>${report}</p>
            </div>
        `;
        fs_1.default.writeFileSync(this.reportFileName, htmlReport);
    }
}
exports.HTMLReport = HTMLReport;
