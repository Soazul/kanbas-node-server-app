import database from "../Database/index.js";

export default function AssignmentRoutes(app) {
    app.put('/api/assignments/:aid', (req, res) => {
        const {aid} = req.params;
        const assignmentIndex = database.assignments.findIndex((a) => a._id === aid);
        database.assignments[assignmentIndex] = {...database.assignments[assignmentIndex], ...req.body};
        res.sendStatus(204);
    });
    app.delete('/api/courses/assignment/:aid', (req, res) => {
        const {aid} = req.params;
        database.assignments = database.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });
    app.post('/api/courses/:cid/assignment', (req, res) => {
        const {cid} = req.params;
        const newAssignment = {...req.body, course: cid, _id: new Date().getTime().toString()};
        database.assignments.push(newAssignment);
        res.send(newAssignment);
    });
    app.get('/api/courses/:cid/assignment', (req, res) => {
        const {cid} = req.params; 
        const assignment = database.assignments.filter((a) => a.course === cid);
        res.json(assignment);
    });
}