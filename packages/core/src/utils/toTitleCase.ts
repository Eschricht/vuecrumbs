export function toTitleCase(str: string) {
  const words: string[] = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) || []

  return words.map(x => x.slice(0, 1).toUpperCase() + x.slice(1)).join(' ')
}
