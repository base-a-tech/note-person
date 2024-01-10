/* eslint-disable prettier/prettier */
export const log = {
  warn: (...message: any) => {
    console.log('\x1b[33m', ...message, '\x1b[0m');
  },
  error: (...message: any) => {
    console.log('\x1b[31m', ...message, '\x1b[0m');
  },
  success: (...message: any) => {
    console.log('\x1b[32m', ...message, '\x1b[0m');
  },
  normal: (...message: any) => {
    console.log('\x1b[0m', ...message);
  },
}