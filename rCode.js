const axios = require('axios')

const URL = 'http://letsrevolutionizetesting.com/challenge.json'

const makeRequest = (url) => {
    return axios({
        method: 'get',
        url
    }).then(res => {
        return res.data
    })
}

const runLoop = async (url) => {
    const res = await makeRequest(url)

    if (Object.hasOwn(res, 'follow')) {
        return runLoop(res.follow.replace('challenge?', 'challenge.json?'))
    }

    return res
}

runLoop(URL)
    .then((result) => {
        console.log("========================")
        console.log(result)
        console.log("========================")
    })
