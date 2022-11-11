'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bootcamps',
                                    'reviews_id',
                                    {
                                      type: Sequelize.INTEGER,
                                      references:{
                                        model:'reviews',
                                        key:'id'
                                      }
                                    }
                                  )    
                                
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps' , 
    'reviews_id'
    )
  }
};
