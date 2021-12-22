import * as d from '../data/dadjokes.json'
import { IJoke } from '../interfaces'

export const search = (searchParams: string) => {
    let arr = JSON.parse(JSON.stringify(d)).default
    let idx: number = Math.floor(Math.random()*searchParams.length)
    let result: IJoke = arr[idx]
    return result;
}

export default { search }