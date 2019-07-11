import { getSystemPath, join, normalize } from '@angular-devkit/core';
import { writeFileSync } from 'fs';

import { BuildSchema } from '../custom-build/schema';
import { ServeSchema } from '../custom-serve/schema';

export function prepareBrowserConfig(
  options: BuildSchema | ServeSchema | any,
  browserOptions: any
) {
  const optionsStarter = { ...browserOptions };

  if (options.consolelogs) {
    // Write the config to a file, and then include that in the bundle so it loads on window
    const configPath = getSystemPath(
      join(
        normalize(__dirname),
        '../../assets',
        normalize('consolelog-config.js')
      )
    );
    writeFileSync(
      configPath,
      `window.Logging = window.Logging || {}; Logging.ConsoleLogServerConfig = { wsPort: ${
        options.consolelogsPort
      } }`
    );
    if (optionsStarter.scripts) {
      optionsStarter.scripts.push({
        input: configPath,
        bundleName: 'consolelogs',
        lazy: false
      });
      optionsStarter.scripts.push({
        input: getSystemPath(
          join(
            normalize(__dirname),
            '../../assets',
            normalize('consolelogs.js')
          )
        ),
        bundleName: 'consolelogs',
        lazy: false
      });
    }
  }

  if (browserOptions.scripts) {
    browserOptions.scripts.push({
      input: getSystemPath(
        join(normalize(__dirname), '../../assets', normalize('my-alert.js'))
      )
    });
  }

  return optionsStarter;
}
