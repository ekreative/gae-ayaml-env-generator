#!/usr/bin/env node

import generate from './generate.js'
import fs from 'fs'
import yargs from 'yargs'
import YAML from 'yaml'

function run () {
  const argv = yargs
    .command('$0 [file]', 'Generate the app.yaml file for App Engine', (yargs) => {
      yargs.positional('file', {
        describe: 'The name of the template file, use 0 for stdin',
        default: 'app.template.yaml'
      })
    })
    .option('prefix', {
      describe: 'Environment variable prefix, defaults to APP_',
      default: 'APP_'
    })
    .option('service', {
      describe: 'Change the service name in the yaml'
    })
    .version()
    .help()
    .argv

  let input
  try {
    input = YAML.parse(fs.readFileSync(argv.file, 'utf-8')) || {}
  } catch (err) {
    if (err.code === 'ENOENT') {
      input = {}
    } else {
      throw err
    }
  }
  const output = generate(input, process.env, { envPrefix: argv.prefix, service: argv.service })
  process.stdout.write(YAML.stringify(output))
}

run()
