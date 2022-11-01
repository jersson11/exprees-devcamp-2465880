'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bootcamps',
                                    'user_id',
                                    {
                                      type: Sequelize.INTEGER,
                                      references:{
                                        model:'users',
                                        key:'id'
                                      }
                                    }
                                  )    
                                
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps' , 
    'user_id'
    )
  }
};
