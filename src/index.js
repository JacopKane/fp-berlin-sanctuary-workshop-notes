import debugFactory from 'debug'
import * as examples from './examples'

const debug = debugFactory('')
debug.enabled = true

debug('examples %O', examples)
