const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
  audit: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: Date.now,
  },
  memberId: {
    type: Number,
    required: true,
  },
  modelId: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
});

const Audit = mongoose.model('Audit', auditSchema);

module.exports = Audit;
