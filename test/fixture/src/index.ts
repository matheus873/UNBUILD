import { arch } from 'os'

console.log('__filename', __filename)
console.log('__dirname', __dirname)
console.log('import.meta.url', import.meta.url)

console.log(arch())
console.log(require('os').arch())
console.log(require.resolve('rollup'))
import('os').then(os => console.log(os.arch()))

export const foo = 'bar'
