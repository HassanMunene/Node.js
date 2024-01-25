const { getAllJobs, getJob, createJob, updateJob, deleteJob} = require('../controller/jobsController')
const express = require('express');

const jobsRoute = express.Router();

jobsRoute.route('/').get(getAllJobs).post(createJob);
jobsRoute.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = jobsRoute;