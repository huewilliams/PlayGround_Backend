const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize(
    'playground', // DB이름
    'root', // 유저명
    'espada8012!', // 패스워드
    {
        'host':'127.0.0.1', // 사용할 호스트
        'dialect':'mysql', // 사용할 DB 종류
        'operatorsAliases':false, // deprecated 된 연산자 사용
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;