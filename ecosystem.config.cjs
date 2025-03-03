module.exports = {
    apps: [
      {
        name: "bridget-agent",
        script: "pnpm",
        args: "start --character=./characters/bridget.character.json",
        cron_restart: "0 */12 * * *",
        cwd: "/root/bridget-agent-apis",
        watch: false,
        autorestart: true,
      },
    ],
  };