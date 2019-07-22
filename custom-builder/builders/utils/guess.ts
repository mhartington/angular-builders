import { BuilderContext } from '@angular-devkit/architect';
import { ExecutionTransformer } from '@angular-devkit/build-angular';
import { WebpackLoggingCallback } from '@angular-devkit/build-webpack';
import { parseRoutes } from 'guess-parser';
import { GuessPlugin } from 'guess-webpack';
import { Observable } from 'rxjs';
import { Configuration } from 'webpack';

interface BuilderTransforms {
  webpackConfiguration?: ExecutionTransformer<Configuration>;
  logging?: WebpackLoggingCallback;
}
type Builder<T, R> = (
  options: T,
  context: BuilderContext,
  transforms?: BuilderTransforms
) => Observable<R>;

export function guessBuilder<T, R>(builder: Builder<T, R>) {
  return (options: any, context: BuilderContext) => {
    return builder(options, context, {
      webpackConfiguration(config) {
        config.plugins!.push(
          new GuessPlugin({
            reportProvider() {
              return Promise.resolve(
                JSON.parse(
                  require('fs').readFileSync(
                    require('path').join(context.workspaceRoot, 'routes.json')
                  )
                )
              );
            },
            runtime: {
              delegate: false
            },
            routeProvider() {
              return Promise.resolve(parseRoutes('.'));
            }
          })
        );
        return config;
      }
    });
  };
}
