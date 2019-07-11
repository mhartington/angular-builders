import { BuilderContext, BuilderOutput, createBuilder, targetFromTargetString } from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import { prepareBrowserConfig } from '../utils';
import { createConsoleLogServer } from './log-server';
import { ServeSchema } from './schema';

export type ServerBuilderOptions = ServeSchema & json.JsonObject;

export async function serveCustom(
  options: ServeSchema,
  context: BuilderContext
): Promise<BuilderOutput> {
  return new Promise(async () => {

    const { devServerTarget, buildTarget } = options;

    // Getting the original browser build options
    const buildTargetSpec = targetFromTargetString(buildTarget);
    const buildTargetOptions = await context.getTargetOptions(buildTargetSpec) as { browserTarget: string };
    const browserBuildTargetSpec = targetFromTargetString(buildTargetOptions.browserTarget);

    // What we actually need....
    const browserBuildTargetOptions = await context.getTargetOptions(browserBuildTargetSpec);

    // Modifying those options to pass in cordova-speicfic stuff
    prepareBrowserConfig(options, browserBuildTargetOptions);


    const devServerTargetSpec = targetFromTargetString(devServerTarget);
    const devServerTargetOptions = await context.getTargetOptions(devServerTargetSpec);


    if (options.consolelogs && options.consolelogsPort) {
      await createConsoleLogServer('localhost', options.consolelogsPort);
    }

    return context
      .scheduleTarget(devServerTargetSpec, devServerTargetOptions)
      .then(buildEvent => ({ ...buildEvent }));
  });
}
export default createBuilder<ServerBuilderOptions, any>(serveCustom);
