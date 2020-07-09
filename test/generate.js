import t from 'tap'
import generate from '../lib/generate.js'

t.test('generates from empty', t => {
  const out = generate()
  t.matchSnapshot(out)
  t.end()
})

t.test('set an env var', t => {
  const out = generate({}, { APP_EXAMPLE: 'example' })
  t.matchSnapshot(out)
  t.end()
})

t.test('add an env var', t => {
  const out = generate({ env_variables: { EXAMPLE: 'example' } }, { APP_EXAMPLE2: 'example2' })
  t.matchSnapshot(out)
  t.end()
})

t.test('overrides envvar', t => {
  const out = generate({ env_variables: { EXAMPLE: 'example' } }, { APP_EXAMPLE: 'example2' })
  t.matchSnapshot(out)
  t.end()
})

t.test('change env var prefix', t => {
  const out = generate({}, { BOB_EXAMPLE: 'example', APP_EXAMPLE2: 'example2' }, { envPrefix: 'BOB_' })
  t.matchSnapshot(out)
  t.end()
})

t.test('double env var prefix', t => {
  const out = generate({}, { APP_APP_EXAMPLE: 'example' })
  t.matchSnapshot(out)
  t.end()
})

t.test('add service name', t => {
  const out = generate({}, {}, { service: 'my-service' })
  t.matchSnapshot(out)
  t.end()
})

t.test('update service name', t => {
  const out = generate({ service: 'another-service' }, {}, { service: 'my-service' })
  t.matchSnapshot(out)
  t.end()
})

t.test('dont change service name', t => {
  const out = generate({ service: 'another-service' })
  t.matchSnapshot(out)
  t.end()
})
