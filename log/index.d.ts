/**
 * This function returns a namespaced log function.
 * The log function takes one argument and an optional second argument.
 *
 * @example
 *
 * import Logger from '@magikcraft/log'
 * const log = Logger('my_module')
 * log('A message')
 * log('Players:', players)
 *
 * @param namespace
 */
declare const Logger: (namespace: string) => (msg: string, toLog?: any) => void;
export default Logger;
