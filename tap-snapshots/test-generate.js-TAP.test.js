/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/generate.js TAP add an env var > must match snapshot 1`] = `
Object {
  "env_variables": Object {
    "EXAMPLE": "example",
    "EXAMPLE2": "example2",
  },
}
`

exports[`test/generate.js TAP add service name > must match snapshot 1`] = `
Object {
  "env_variables": Object {},
  "service": "my-service",
}
`

exports[`test/generate.js TAP change env var prefix > must match snapshot 1`] = `
Object {
  "env_variables": Object {
    "EXAMPLE": "example",
  },
}
`

exports[`test/generate.js TAP dont change service name > must match snapshot 1`] = `
Object {
  "env_variables": Object {},
  "service": "another-service",
}
`

exports[`test/generate.js TAP double env var prefix > must match snapshot 1`] = `
Object {
  "env_variables": Object {
    "APP_EXAMPLE": "example",
  },
}
`

exports[`test/generate.js TAP generates from empty > must match snapshot 1`] = `
Object {
  "env_variables": Object {},
}
`

exports[`test/generate.js TAP overrides envvar > must match snapshot 1`] = `
Object {
  "env_variables": Object {
    "EXAMPLE": "example2",
  },
}
`

exports[`test/generate.js TAP set an env var > must match snapshot 1`] = `
Object {
  "env_variables": Object {
    "EXAMPLE": "example",
  },
}
`

exports[`test/generate.js TAP update service name > must match snapshot 1`] = `
Object {
  "env_variables": Object {},
  "service": "my-service",
}
`
