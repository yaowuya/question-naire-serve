const express = require("express")

const app = express()

app.set('secret', 'abc123')

app.use(require("cors")())
app.use(express.json())

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require("./database/db")(app)
require("./routes/admin")(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
