import { createServer } from 'https';
import { parse } from 'url';
import { readFileSync } from 'fs';

import next from 'next';

import nextConfig from './next.config.js';

const app = next({ dev: true, conf: nextConfig });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: readFileSync('./.certificates/localhost.key'),
  cert: readFileSync('./.certificates/localhost.crt'),
};
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Server started on https://local.thenile.dev');
  });
});