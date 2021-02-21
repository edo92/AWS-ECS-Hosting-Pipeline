import chalk from "chalk";
const log = console.log;

interface IPrint {
  text: string;
  visible?: boolean | undefined;
}

class Logger {
  public static print(config: IPrint): void {
    if (config.visible || config.visible === undefined) {
      log(`- ${chalk.gray(config.text)} \n`);
    }
  }
}

export default Logger;
