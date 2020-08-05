const { Router } = require('express');
const documentRouter = require('./documents.route');

const router = Router();

router.use('/api/keep/documents', documentRouter );

//default route must be the last one
router.get('/', (request, response) => {
    response.send('API application Express & Cloudant');
});

module.exports = router;