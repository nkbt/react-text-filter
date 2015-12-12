'use strict';

// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export
const TextFilter = require('./TextFilter').default;

module.exports = TextFilter;
