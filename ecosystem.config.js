module.exports = {
  apps: [
    {
      name: "my-app",
      script: "app.js",
      instances: "max",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ],

  deploy: {
    production: {
      user: "ubuntu",                       // 서버 사용자명
      host: "your.server.com",              // 서버 주소
      ref: "origin/main",                   // 브랜치
      repo: "git@github.com:yourname/your-repo.git",  // 깃 주소
      path: "/var/www/my-app",              // 서버 내 배포 디렉토리
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
