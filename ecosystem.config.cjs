module.exports = {
    apps: [
      {
        name: "chump-agent",
        script: "pnpm",
        args: "start --character=`./characters/chump.character.json`",
        cron_restart: "0 */12 * * *",
        watch: false,
        autorestart: true,
      },
    ],
  };