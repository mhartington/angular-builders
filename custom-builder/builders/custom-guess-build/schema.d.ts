import { RuntimeConfig } from 'guess-webpack';

export interface GuessOptions {
  browserTarget: string;
  routesPath?: string;
  GA?: string;
  jwt?: any;
  debug?: boolean;
  runtime?: RuntimeConfig;
}
