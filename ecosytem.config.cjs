module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",

      cwd: "/var/www/my-next-app",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",

      error_file: "/var/log/pm2/next-error.log",
      out_file: "/var/log/pm2/next-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
