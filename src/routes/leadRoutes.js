const express = require('express');
const router = express.Router();
const {
  createLead,
  getAllLeads,
  getLeadById,
  scoreLeadWithLLM
} = require('../controllers/leadController');

router.post('/', createLead);
router.get('/', getAllLeads);
router.get('/:id', getLeadById);
router.post('/:id/score', scoreLeadWithLLM);

module.exports = router;
