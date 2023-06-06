const User = require('./User');
const Blog = require('./blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});




module.exports = { User};