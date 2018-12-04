const express = require('express');

const router = express.Router();

// 루트 라우터
router.get('/', (req, res, next)=>{
    res.json({
        "message": "connection success"
    });
});

module.exports = router;