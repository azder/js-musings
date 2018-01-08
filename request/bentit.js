/** Created by azder on 2018-01-08. */


const bent = require('bent');
const log = console.log.bind(console, '[BENTIT]');

const codes = [200, 301];
const get = bent('string', ...codes);

(async () => {
    const location = 'https://www.google.com';
    log('fetching', location, '...');
    const body = await get(location);
    log('got', body)
})();
