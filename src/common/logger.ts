import pino from 'pino';

const transport =
  process.env.PRETTY_PRINT === 'true'
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      }
    : undefined;

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: {
    service: 'rickroll-spotter',
    logContext: require.main?.filename,
    environment: process.env.NODE_ENV,
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: transport ?? undefined,
  formatters: {
    level (label: string, level: number) {
      return { level: label };
    },
  },
});

export default logger;
