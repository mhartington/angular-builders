import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
// import { executeBrowserBuilder } from '@angular-devkit/build-angular';
import { json } from '@angular-devkit/core';
import { Observable, of } from 'rxjs';
// import { guessBuilder } from '../utils/guess';

import { GuessOptions } from './schema';

function createGuessBuild(
  options: GuessOptions,
  context: BuilderContext
): Observable<BuilderOutput> {
  // return guessBuilder(executeBrowserBuilder)(options, context);
  context.logger.log(JSON.stringify(options));
}

export default createBuilder<json.JsonObject & GuessOptions>(createGuessBuild);
