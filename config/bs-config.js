/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

const proxy = require('http-proxy-middleware');
const devApi = proxy('/api', { // all requests to /api/** => will redirect on http://localhost:8080/api/**
  target: 'http://localhost:8080',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
});
const fallback = require('connect-history-api-fallback');

module.exports = {
  server: {
    always: 'index.html',
    baseDir: './src/main/resources/public/',
    middleware: [devApi, fallback()]//,
    // middleware: [fallback()]
  },
  files: ['./src/main/resources/public/**/*.*'],
  // default config:
  "ui": {
    "port": 3001,
    "weinre": {
      "port": 8080
    }
  },
  "watchOptions": {},
  "proxy": false,
  "port": 3000,
  "middleware": false,
  "serveStatic": [],
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  },
  "logLevel": "info",
  "logPrefix": "BS",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "rewriteRules": false,
  "open": "local",
  "browser": "default",
  "xip": false,
  "hostnameSuffix": false,
  "reloadOnRestart": false,
  "notify": true,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "scrollRestoreTechnique": "window.name",
  "scrollElements": [],
  "scrollElementMapping": [],
  "reloadDelay": 0,
  "reloadDebounce": 0,
  "reloadThrottle": 0,
  "plugins": [],
  "injectChanges": true,
  "startPath": null,
  "minify": true,
  "host": null,
  "codeSync": true,
  "timestamps": true,
  "clientEvents": [
    "scroll",
    "scroll:element",
    "input:text",
    "input:toggles",
    "form:submit",
    "form:reset",
    "click"
  ],
  "socket": {
    "socketIoOptions": {
      "log": false
    },
    "socketIoClientConfig": {
      "reconnectionAttempts": 50
    },
    "path": "/browser-sync/socket.io",
    "clientPath": "/browser-sync",
    "namespace": "/browser-sync",
    "clients": {
      "heartbeatTimeout": 5000
    }
  },
  "tagNames": {
    "less": "link",
    "scss": "link",
    "css": "link",
    "jpg": "img",
    "jpeg": "img",
    "png": "img",
    "svg": "img",
    "gif": "img",
    "js": "script"
  }
};
