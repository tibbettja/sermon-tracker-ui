import pino from 'pino'

import logLevelData from '@/@core/configs/logConfig'
type logLevelOptions = typeof logLevelData
type LogOption = keyof logLevelOptions

const logLevels = new Map(Object.entries(logLevelData))

export function getLoggerLevel(option: LogOption) {
  return logLevels.get(option) || logLevels.get('*') || 'info'
}

export function getLogger(option: LogOption) {
  return pino({ name: option, level: getLoggerLevel(option) })
}
