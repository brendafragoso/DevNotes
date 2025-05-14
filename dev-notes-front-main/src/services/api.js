import axios from 'axios'

const apiDevNotes = axios.create({
    baseURL: 'http://localhost:3001'
})

/*
apiDevNotes.interceptors.request.use(async config => {
    //const userData = await localStorage.getItem('dev-notes-api:userData')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI4Yjk3YmM4LTE5ZmUtNGMyYy1iMmYwLTcyOGM3ZDIwOGYzMSIsImlhdCI6MTcxNDg1NTkwNiwiZXhwIjoxNzE1MTE1MTA2fQ.ByV4F9G74cxL5XbDVE93XSzjHoEiW7IhvI9RFKnwzv0'
    config.headers.authorization = `Bearer ${token}`
    return config    
})

export default apiDevNotes */




apiDevNotes.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('devnotes:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config    
})

export default apiDevNotes