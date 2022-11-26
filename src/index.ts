import logger from './common/logger';

try {
  let a;
  //@ts-ignore
  throw new Error('awww sheet');
} catch (error) {
  if (error instanceof Error) {
    const newError = new Error(error.message, { cause: error });
    logger.error(newError); 
  }
}
