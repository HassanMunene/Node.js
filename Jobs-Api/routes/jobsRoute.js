const { getAllJobs, getJob, createJob, updateJob, deleteJob} = require('../controller/jobsController')
const express = require('express');

const route = express.Router;

route.Router('/api/v1/jobs').get(getAllJobs).post(createJob);
route.Router('api/v1/jobs/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = route