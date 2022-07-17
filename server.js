const express = require('express')
const app = express()
const PORT = 3000

const rappers = {
    '21 savage':{
    'age': 29,
    'birthname': 'Shéyaa Bin Abraham-Joseph',
    'birthlocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthname': 'Chancelor Johnathan Bennett',
        'birthlocation': 'Chicago, Illinois'
        },
    'dylan':{
        'age': 29,
        'birthname': 'Dylan',
        'birthlocation': 'Dylan'
        },
}


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (req,res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
    res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})
app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})