/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  name:'string',
  email:'string',
    users: {
      collection: 'user',
      via: 'admin'
    }
  }
};

