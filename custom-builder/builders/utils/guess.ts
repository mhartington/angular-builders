import { GuessPlugin } from 'guess-webpack';
import { parseRoutes } from 'guess-parser';

import { BuilderContext } from '@angular-devkit/architect';
import { ExecutionTransformer } from '@angular-devkit/build-angular';
import { WebpackLoggingCallback } from '@angular-devkit/build-webpack';
import { Observable } from 'rxjs';
import * as webpack from 'webpack';
import { GuessOptions } from '../guess-builder/schema';

interface BuilderTransforms {
  webpackConfiguration?: ExecutionTransformer<webpack.Configuration>;
  logging?: WebpackLoggingCallback;
}

type Builder<R> = (
  options: GuessOptions,
  context: BuilderContext,
  transforms?: BuilderTransforms
) => Observable<R>;

export function guessBuilder<R>(builder: Builder<R>) {
  return (options: GuessOptions, context: BuilderContext) => {
    return builder(options, context, {
      webpackConfiguration(input) {
        if (input && input.plugins) {
          input.plugins.push(
            new GuessPlugin({
              debug: true,
              // Alternatively you can provide a Google Analytics View ID
              // GA: 'XXXXXX',
              reportProvider() {
                return Promise.resolve(
                  JSON.parse(require('fs').readFileSync('./routes.json'))
                );
              },
              runtime: {
                delegate: false
              },
              routeProvider() {
                return parseRoutes('.');
              }
            })
          );
        }
        return input;
      }
    });
  };
}
