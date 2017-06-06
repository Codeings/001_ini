/**
 * Devolutivo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id:{
        primaryKey:true,
        required  :true,
        unique    :true,
        type      :'string'
      },

      nombre: {
        type      :'string',
        required  :true
      },

      descripcion: {
        type      :'string',
        required  :true
      },

      descripcion: {
        type      :'date',
        required  :true
      },

      tipodevolutivo: {
        model     :'tipodevolutivo',
        required  :true
      }
  }
};
