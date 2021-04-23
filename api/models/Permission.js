/**
 * Permission.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    modules:{
    type:'json',
    columnType: 'array'
    },
    role: {
      model: 'role'
    }
  },

};

