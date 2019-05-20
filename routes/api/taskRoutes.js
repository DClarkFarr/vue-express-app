const express = require('express');
const router = express.Router();

const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const Task = require(root('models/task'));


router.get('/', (req, res) => {
    const db = getDb();
    db.collection('tasks').find().toArray().then((tasks) => {
        tasks = Task.collect(tasks)
        Promise.all(
            tasks.map( (t) => {
                return t.inflate();
            })
        ).then(() => {
            res.json(
                tasks
            )
        })
        
    })

});

router.post('/add', (req, res) => {
    if(!req.body.text){
        res.json({status: 'failed', message: 'Task description required'});
        return;
    }

    Task.create({
        text: req.body.text,
        completed: req.body.completed,
        id_user: req.body.id_user,
    }).then(task => {
        res.json({status: 'success', task: task});
    });
});

router.post('/delete/:id_task', (req, res) => {
    Task.delete(req.params.id_task).then(result => {
        res.json({status: 'Success', message: "Task Deleted"});
    })
})

router.get('/get/:id_task', (req, res) => {

    console.log('get task', req.params.id_task);
    
    res.send('get task ' + req.params.id_task);
});

module.exports = router;