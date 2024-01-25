const getAllJobs = (req, res) => {
    res.json({msg: 'get all the jobs in the database'});
}

const getJob = (req, res) => {
    res.json({msg: 'get specific job depending on ID'})
}

const createJob = (req, res) => {
    res.json({msg: 'create a job using the post request'})
}

const updateJob = (req, res) => {
    res.json({msg: 'update the specific job using PATCH'});
}

const deleteJob = (req, res) => {
    res.json({msg: 'delete a specific job'})
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}