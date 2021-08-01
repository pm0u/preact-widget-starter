import render from 'preact-render-to-string'
import props from './props.json'

import { Widget } from '../widget'

console.log()
console.log(render(<Widget {...props} />))
console.log()
