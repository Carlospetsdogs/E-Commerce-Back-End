// Import necessary modules
const { Model, DataTypes } = require('sequelize'); // Import Model and DataTypes from Sequelize

const sequelize = require('../config/connection'); // Import sequelize connection

class ProductTag extends Model { } // Define ProductTag class which extends Model

// Initialize ProductTag model with its attributes and options
ProductTag.init(
  {
    id: { // Define 'id' attribute
      type: DataTypes.INTEGER, // Data type is INTEGER
      allowNull: false, // Not null constraint
      primaryKey: true, // Primary key
      autoIncrement: true, // Auto-incrementing
    },
    product_id: { // Define 'product_id' attribute
      type: DataTypes.INTEGER, // Data type is INTEGER
      references: { // Foreign key constraint referencing 'id' column of 'product' table
        model: 'product',
        key: 'id',
      },
    },
    tag_id: { // Define 'tag_id' attribute
      type: DataTypes.INTEGER, // Data type is INTEGER
      references: { // Foreign key constraint referencing 'id' column of 'tag' table
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize, // Assign the sequelize connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevents pluralization of table name
    underscored: true, // Use underscores instead of camelCase for column names
    modelName: 'product_tag', // Define the model name
  }
);

module.exports = ProductTag; // Export the ProductTag model
