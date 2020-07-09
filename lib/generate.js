export default function generate (app = {}, env = {}, { envPrefix = 'APP_', service } = {}) {
  if (!app.env_variables) {
    app.env_variables = {}
  }

  Object
    .keys(env)
    .filter(key => key.startsWith(envPrefix))
    .forEach((key) => {
      app.env_variables[key.replace(envPrefix, '')] = env[key]
    })

  if (service) {
    app.service = service
  }

  return app
}
