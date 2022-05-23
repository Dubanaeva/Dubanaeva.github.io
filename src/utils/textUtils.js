/**
 * Example:
 * truncateText("hello my friend", 2) => "hello my..."
 * 
 * @param {string} text Text to truncate.
 * @param {number} words Word's amount of truncated text.
 * @returns {string} Truncated text.
 */
export function truncateText(text, words) {
    return text.split(' ', words).join(' ') + '...'
}