const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        myexpressApi: 'Works!'
    });
});

module.exports = router;