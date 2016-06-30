/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

   schema: true,

  attributes: {
  	
        userID: {
     type: 'string',
    required: true
    },
    
    

  	firstname: {
  		type: 'string'
  		
  	},
    lastname: {
      type: 'string'
      
    },

    mobile:{
      type: 'string',
      
    },

  	
  	email: {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},

  	encryptedPassword: {
  		type: 'string'
  	},

   

    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
    }


  }
};

