const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require(
'@supabase/supabase-js'
)
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 
'https://hqvuwikrkrirlwexgzyf.supabase.co'
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxdnV3aWtya3Jpcmx3ZXhnenlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzODc1MzQsImV4cCI6MjAxNjk2MzUzNH0.iRrnXCm7WDjQUAeI2nLKdDa7H3pKlhRgobLF6IXhOBc'
const supabase = supabaseClient.createClient(
supabaseUrl
, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 
__dirname
})
})

app.get('/adopt', async (req, res) => {
    console.log('Getting Adopter Info')

    const {data, error} = await supabase
    .from('Adopt Info')
    .select();

    if (error) {
        console.log(error)
    } else if (data) {
        res.send(data)
    }
})


app.post('/adopt', async (req, res) => {
    console.log('Adopter Info')

    var firstName = req.body.firstName;
    var lastName = req.body.lastName
    var phone = req.body.phone;
    var email = req.body.email

    const {data, error} = await supabase
        .from('Customer')
        .insert([
            {'first_name': firstName, 
'last_name'
: lastName, 'phone_number': phone, 'email': 
email
}
        ])
        .select();

    console.log(data)
    res.header('Content-type', 
'application/json'
)
    res.send(data)
})

app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})
