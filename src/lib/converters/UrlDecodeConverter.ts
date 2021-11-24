import { ConverterOptions } from '@lib/types'

export const id = 'urlDecode'

export const outputId = 'plain'

export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return decodeURIComponent(input)
}
