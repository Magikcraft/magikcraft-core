export declare type Log = (message: string, toLog?: any) => void;
export declare type Logger = (namespace: string) => Log;
/**
 * This function returns a namespaced log function.
 * The log function takes one argument and an optional second argument.
 *
 * @example
 *
 * import { Logger } from '@magikcraft/log'
 * const log = Logger('my_module')
 * log('A message')
 * log('Players:', players)
 *
 * @param namespace
 */
export declare const Logger: (namespace: any) => (msg: string, toLog?: any) => void;
