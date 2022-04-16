/**
 * @param {Blob} file 
 * @returns {Promise<*>}
 */
const XLSXParser = (file) => {
    return new Promise((resolve, reject) => {
        const result = {}
        const reader = new FileReader();
        const XLSX = require('xlsx');
        reader.onload = (ev) => {
            let content = ev.target.result;
            let wb = XLSX.read(content, { type: 'buffer' });
            wb.SheetNames.forEach((sheetName) => {
                result[sheetName] = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
            })
            resolve(result["SumKund"]);
        }
        reader.onerror = reject;
        reader.readAsArrayBuffer(file)
    })
}

export const ToXLSX = (file) => {
    const XLSX = require('xlsx')
    let ws = XLSX.utils.json_to_sheet(Object.values(file))
    let wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    let buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    let blob = new Blob([buffer], { type: 'xlsx' });
    return blob;
}

export default XLSXParser;