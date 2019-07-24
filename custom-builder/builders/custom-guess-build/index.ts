import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
  targetFromTargetString
} from '@angular-devkit/architect';
import { executeBrowserBuilder } from '@angular-devkit/build-angular';
import { json } from '@angular-devkit/core';
import { forkJoin, from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { guessBuilder } from '../utils/guess';
import { GuessOptions } from './schema';

function createGuessBuild(
  options: GuessOptions,
  context: BuilderContext
): Observable<BuilderOutput> {
  const browserTargetSpec = targetFromTargetString(options.browserTarget);
  context.builder.builderName = 'browser';
  return forkJoin(
    from(context.getTargetOptions(browserTargetSpec)),
    from(context.getBuilderNameForTarget(browserTargetSpec))
  ).pipe(
    concatMap(([buildOptions, buildName]) =>
      from(context.validateOptions(buildOptions, buildName))
    ),
    concatMap(val => guessBuilder(executeBrowserBuilder)(val, context))
  );
}

export default createBuilder<json.JsonObject & GuessOptions>(createGuessBuild);
