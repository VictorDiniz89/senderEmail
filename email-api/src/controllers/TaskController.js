const database = require('../database/connection')

class TaskController {
    newTask(req, res) {
        const {name, email, message} = req.body
        console.log(name, email, message)

        database.insert({name, email, message}).table('task').then(data=>{
            console.log(data)
            res.json({msg: "Task add sucessful!"})
        }).catch(error =>{
            console.log(error)
        })
    }

    listTasks(req, res){
        database.select('*').table('task').then(tasks => {
            console.log(tasks)
            res.json(tasks)
        }).catch(error => {
            console.log(error)
        })
    }

    listOneTask(req, res) {
        const id = req.params.id
        
        database.select('*').table('task').where({id:id}).then(task => {
            res.json(task)

        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new TaskController()