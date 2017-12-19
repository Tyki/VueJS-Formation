const express = require('express')

let app = express()

// Declare our route and call the controller that will do all the job with callbacks
app.get('/getSkills', function (req, res) {
  res.send(JSON.stringify({
    skills: [
      {
        name: 'HTML',
        percent: '80%'
      },
      {
        name: 'CSS',
        percent: '20%'
      },
      {
        name: 'VueJS',
        percent: '100%'
      }
    ]
  }))
})

app.listen(3000)
