import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
  targetFromTargetString
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

import { prepareBrowserConfig } from '../utils';

import { BuildSchema } from './schema';

export default createBuilder<json.JsonObject & BuildSchema>(buildCustom);

export async function buildCustom(
  options: BuildSchema,
  context: BuilderContext
): Promise<BuilderOutput> {
  // Get angular browser build target
  const browserTargetSpec = targetFromTargetString(options.browserTarget);
  // Get browser build options
  const browserBuildTargetOptions = await context.getTargetOptions(
    browserTargetSpec
  );

  const newOptions = prepareBrowserConfig(options, browserBuildTargetOptions);

  const browserBuild = await context.scheduleTarget(
    browserTargetSpec,
    newOptions
  );
  return browserBuild.result;
}
