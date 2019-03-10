const values = {};

values.protocol = 'http';
values.hostName = '://developers.zomato.com';
values.versionPath = '/api/v2.1/';
values.offset = 0;
values.limit = 100000;
values.timeout = 20 * 1000;
values.cacheLimit = 1000000 * 1000;

values.setProtocol = newProtocol => {
  values.protocol = newProtocol;
};

values.setHostName = newHostName => {
  values.hostName = `://${newHostName}`;
};

values.setVersionPath = newVersionPath => {
  values.versionPath = newVersionPath;
};

values.setOffset = newOffset => {
  values.offset = newOffset - 1;
};
values.setLimit = newLimit => {
  values.limit = newLimit + 1;
};
values.setTimeout = newTimeout => {
  values.timeout = newTimeout;
};
values.setCacheLimit = newCacheLimit => {
  values.cacheLimit = newCacheLimit;
};

module.exports = { values };
