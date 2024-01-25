const getAllJobs = async (req, res) => {
    res.json({msg: 'get all the jobs in the database'});
}

const getJob = async (req, res) => {
    res.json({msg: 'get specific job depending on ID'})
}

const createJob = async (req, res) => {
    res.json({msg: 'create a job using the post request', body: req.body})
}

const updateJob = async (req, res) => {
    res.json({msg: 'update the specific job using PATCH'});
}

const deleteJob = async (req, res) => {
    res.json({msg: 'delete a specific job'})
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}