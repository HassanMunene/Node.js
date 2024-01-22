const login = async (req, res) => {
    res.send('fake login/register/signup/ Route');
}

const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() *100);
    res.status(200).json({msg: `Hello, Hassan Munene`, secret: `Here is your lucky number: ${luckyNumber}`});
}

module.exports = {
    login, dashboard
}