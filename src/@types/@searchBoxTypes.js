
/**
 * @typedef SearchBoxMatchState
 * @property {number} type
 * @property {FileContent} value
 */

/**
 * @typedef SearchBoxState
 * @property {string} search
 * @property {SearchBoxMatchState} match
 * @property {{
 *     type: number,
 *     search: string,
 *     match: SearchBoxMatchState
 * }} additional
 */