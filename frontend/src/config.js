let baseUrl;
if (!process.env.HEROKU) {
    baseUrl = 'http://localhost:3001'
} else {
    baseUrl = 'https://granapp.herokuapp.com'
}

module.exports = {
    BASE_URL: baseUrl
}