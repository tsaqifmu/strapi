'use strict';

/**
 * juki service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::juki.juki');
