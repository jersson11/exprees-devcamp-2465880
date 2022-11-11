'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('courses',
                                    'bootcamps_id',
                                    {
                                      type: Sequelize.INTEGER,
                                      references:{
                                        model:'bootcamps',
                                        key:'id'
                                      }
                                    }
                                  )    
                                
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses' , 
    'bootcamps_id'
    )
  }
};
