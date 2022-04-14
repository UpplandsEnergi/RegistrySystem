
/**
 * @typedef DispatchAction
 * @property {string} type
 * @property {*} content
 */

/**
 * @typedef {Object.<number, FileContent>} DataFile
 */

/**
 * @typedef FileContent
 * @property {string} [knr=Kund ID]
 * @property {string} [pnr=Org/Pnr]
 * @property {string} [namn=Namn]
 * @property {string} [adr=Adress]
 * @property {string} [post=Postnummer]
 * @property {string} [nrAndel=Antal Andelar]
 * @property {string} [nrAnleg=Antal Anläggningar]
 */

/**
 * @typedef AppContextData
 * @property {DataFile} file
 * @property {Object.<string, string>} text
 */

/**
 * @typedef AppContextDispatch
 * @property {(file) => void} setFile
 */

/**
 * @typedef AppContextProvider
 * @property {AppContextData} data
 * @property {AppContextDispatch} dispatch
 */
