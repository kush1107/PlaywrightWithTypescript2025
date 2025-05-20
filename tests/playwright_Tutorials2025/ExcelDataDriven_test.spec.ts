import { test, expect } from '@playwright/test';
import * as ExcelJs from 'exceljs';

// Constants
const excelFilePath = './testData/ExcelTestData.xlsx'; // ✅ FIXED PATH
const sheetName = 'TestData1'; // ✅ Your Sheet Name

// Utility function to read Excel data
async function getTestDataFromExcel(filePath: string, sheetName: string): Promise<any[]> {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
        throw new Error(`Worksheet '${sheetName}' not found in ${filePath}`);
    }

    const rows: any[] = [];
    const headerRow = worksheet.getRow(1).values as string[];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // skip header
        const rowData: any = {};
        row.eachCell((cell, colNumber) => {
            const key = headerRow[colNumber];
            rowData[key] = cell.value;
        });
        rows.push(rowData);
    });

    return rows;
}

// Utility function to write result to Excel
async function writeTestResultToExcel(filePath: string, sheetName: string, rowIndex: number, columnName: string, value: string): Promise<void> {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
        throw new Error(`Worksheet '${sheetName}' not found in ${filePath}`);
    }

    const headerRow = worksheet.getRow(1);
    let targetColIndex = -1;

    headerRow.eachCell((cell, colNumber) => {
        if (cell.value === columnName) {
            targetColIndex = colNumber;
        }
    });

    if (targetColIndex === -1) {
        targetColIndex = headerRow.cellCount + 1;
        headerRow.getCell(targetColIndex).value = columnName;
        headerRow.commit();
    }

    const row = worksheet.getRow(rowIndex);
    row.getCell(targetColIndex).value = value;
    row.commit();

    await workbook.xlsx.writeFile(filePath);
}

// 👇 Wrap everything inside an async IIFE to run properly
test.describe('Data Driven Test using Excel', () => {
    let testData: any[] = [];

    test.beforeAll(async () => {
        testData = await getTestDataFromExcel(excelFilePath, sheetName);
    });

    // Use test.step to dynamically generate tests after data is loaded
    test('Run data driven tests', async ({ page }) => {
        for (let i = 0; i < testData.length; i++) {
            const data = testData[i];
            await test.step(`Login test with ${data.UserName}`, async () => {
                await page.goto('https://www.saucedemo.com/');
                await expect(page).toHaveURL(/saucedemo/);
                await page.fill('#user-name', data.UserName); // Use Name Same as Given In Excel File
                await page.fill('#password', data.Password); // Use Name Same as Given In Excel File
                await page.click('#login-button');  

                // You can validate successful login and write back
                const url = page.url();
                if (url.includes('inventory.html')) {
                    await writeTestResultToExcel(excelFilePath, sheetName, i + 2, 'TestStatus', 'Passed');
                } else {
                    await writeTestResultToExcel(excelFilePath, sheetName, i + 2, 'TestStatus', 'Failed');
                }
            });
        }
    });
});
