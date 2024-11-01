import database from "../Database/index.js";

export default function ModuleRoutes(app) {
    app.put('/api/modules/:mid', (req, res) => {
        const {mid} = req.params;
        const moduleIndex = database.modules.findIndex((m) => m._id === mid);
        database.modules[moduleIndex] = {...database.modules[moduleIndex], ...req.body};
        res.sendStatus(204);
    });
    app.delete('/api/modules/:mid', (req, res) => {
        const {mid} = req.params;
        database.modules = database.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });
    app.post('/api/courses/:cid/modules', (req, res) => {
        const {cid} = req.params;
        const newModule = {...req.body, course: cid, _id: new Date().getTime().toString()};
        database.modules.push(newModule);
        res.send(newModule);
    });
    app.get('/api/courses/:cid/modules', (req, res) => {
        const {cid} = req.params;
        const modules = database.modules.filter((m) => m.course === cid);
        res.json(modules);
    });
}