const events =require('events')
const util = require('util')

const teams = function(name){
    this.name = name
}
// eventEmitter will inherent any teams construct
util.inherits(teams, events.EventEmitter)

const Lakers = new teams('Lakers')
const Nets = new teams('Nets')

// save each constructor in an array
const teamsArray = [Lakers, Nets]

// print each team using forEach loop
teamsArray.forEach((t)=>{
    t.on('nation', function(n){
        console.log(`${t.name} is ${n} basketball league!`)
    })
})

Nets.emit('nation', 'Brooklyn')


/*
const eventEmitter = new events.EventEmitter

eventEmitter.on('test', function(a){
    console.log(a)
})

eventEmitter.emit('test', 'EVENTS IN NODEJS')
*/