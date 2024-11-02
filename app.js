const prompt = require('prompt-sync')()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const Customer = require('./models/Customer')
let username
let name
let age
let result
let update
const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()
  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')

  // Close our app, bringing us back to the command line.
  process.exit()
}

const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.
  const customer = await Customer.create({
    name: name,
    age: age
  })
  console.log(customer)
}

const connect2 = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries2()
  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')

  // Close our app, bringing us back to the command line.
  process.exit()
}

const runQueries2 = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.
  const customers = await Customer.find({})
  result = console.log('all customers:', customers)
}

const connect3 = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries3()
  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')

  // Close our app, bringing us back to the command line.
  process.exit()
}

const runQueries3 = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.
  const customer = await Customer.findByIdAndUpdate(
    update,
    {
      name: name,
      age: age
    },
    { new: true }
  )
}

const connect4 = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries4()
  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')

  // Close our app, bringing us back to the command line.
  process.exit()
}

const runQueries4 = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.
  const customer = await Customer.findByIdAndDelete(update)
  console.log(customer)
}

do {
  console.log('Welcome to the CRM ')
  console.log('What would you like to do?')

  console.log('1. Create a customer')

  console.log('2. View all customers')

  console.log('3. Update a customer')

  console.log('4. Delete a customer')

  console.log('5. quit')

  username = prompt()

  console.log(`You choose ${username}`)

  if (username === '1') {
    console.log('what is the customer name?')
    name = prompt()
    console.log('what is the customer age?')
    age = prompt()
    connect()
  } else if (username === '2') {
    connect2()
    console.log(result)
  } else if (username === '3') {
    console.log('write the id you want to update')
    update = prompt()
    console.log('write the new name')
    name = prompt()
    console.log('write the new age')
    age = prompt()
    connect3()
  } else if (username === '4') {
    console.log('write the id you want to delete')
    update = prompt()
    connect4()
  }
} while (username != '5')
