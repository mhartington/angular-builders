import { BuilderContext, createBuilder, targetFromTargetString } from '@angular-devkit/architect';

export async function createBuilder(
  options: BuilderSchema,
  context: BuilderContext
) {

  // Get angular browser build target
  const browserSpec = targetFromTargetString(options.browserTarget);

  // Get browser build options
  const browserBuildOptions = await context.getTargetOptions(browserSpec);

  // Modify builder options
  const newOptions = prepareBrowserConfig(options, browserBuildOptions);

  // Schedule Browser Builder
  // Await build resultes
  const browserBuild = await context.scheduleTarget(
    browserTargetSpec,
    newOptions
  );
  return browserBuild.result;
}