module.exports = {
    apps: [
      {
        name: "waves-agent",
        script: "pnpm",
        args: "start --character=`./characters/kai.character.json`",
        cron_restart: "0 */12 * * *",
        watch: false,
        autorestart: true,
      },
    ],
  };