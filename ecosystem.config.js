module.exports = {
  apps: [{
    name: 'hugo-server',
    script: '../hugo',
    args: 'server --bind 0.0.0.0 --port 1313 --buildDrafts --watch',
    cwd: '/home/user/webapp/demo-site',
    env: {
      NODE_ENV: 'development'
    },
    log_file: '../logs/hugo.log',
    error_file: '../logs/hugo-error.log',
    out_file: '../logs/hugo-out.log',
    time: true
  }]
};