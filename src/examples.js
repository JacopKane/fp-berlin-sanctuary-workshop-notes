import {
    words,
    parseInt,
    head,
    Nothing,
    Just,
    map,
    sub,
    lines,
    compose,
    chain,
    parseJson,
    K
} from 'sanctuary'
import { test, Array, Integer } from 'sanctuary-def'

export const wordSample = words("foo bar baz")
export const numbers = parseInt(16)("0xFF")
export const numbers1 = parseInt(10)("0xFF")
export const numbers2 = parseInt(10)("1 234")
export const numbers3 = parseInt(10)("1234")
export const headSample = head([])
export const headSample2 = head([1,2,3])
export const nothing = Nothing
export const just = Just(42)
export const justNothing = Just(Nothing)
export const mapSubJust = map(sub(1))(Just(42))
export const mapSubJust2 = map(sub(1))([1,2,3])
export const mapSubJust3 = map(sub(1))({x:1, y: 2, z: 3})
export const linesWithWords = (lines, map, words)("foo aa\nbar barrrr\nbaz\n")
// export const const chain = chain(words)(lines)("foo aa\nbar barrrr\nbaz\n")
const xss = [[1,2,3], [4,5,6]]
export const xssample = chain(head)(head(xss))
export const xssample2 = (head, head)(xss)
// export const const xssCompose = compose(head, chain)(xss)
const json = '[1,2,3,4,5]'
export const parse = parseJson(K(true), json)
// export const cont parse = parseJson(K(true), json).reduce((s,n) => s + n, 0)
export const def1 = test([])(Array(Integer))([1.5])
