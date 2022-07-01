/**
 *
 * @param {*} value
 * @returns
 */
export default function patternText(value: KeyboardEvent, type: string) {
  if (type == 'text') {
    if (/^[a-zA-Z-À-ú ]+$/.test(value.key)) return true;
    else value.preventDefault();
  } else if (type == 'numeric') {
    if (/^[0-9]+$/.test(value.key)) return true;
    else value.preventDefault();
  } else if (type == 'alphanumeric') {
    if (/^[a-zA-Z0-9À-ú ]+$/.test(value.key)) return true;
    else value.preventDefault();
  }
}
