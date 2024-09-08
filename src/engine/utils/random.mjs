/**
 * Description placeholder
 *
 * @export
 * @param {number} [length=16]
 * @returns {string}
 */
export function randomAlphaNumericString(length = 16) {
    const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
        randomString += alphanumericCharacters.charAt(randomIndex);
    }

    return randomString;
}
