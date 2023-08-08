const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
};


// module.exports.getVisitors = (req, res) => { 인데 module. 이 생략되었다.
exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        res.render('visitor', { data : result });
    });
};

exports.getVisitor = (req,res) => {
    Visitor.getVisitor(req.query.id, (result) => {
        res.send('visitor', { data : result });
    })
}

exports.postVisitor = (req,res) => {
    Visitor.postVisitor(req.body, () => {
        res.send({id: result.insertId, name: req.body.name, comment: req.body.comment});
    })
}

exports.patchVisitor = (req,res) => {
    Visitor.patchVisitor(req.body, () => {
        res.send({ result : true });
    })
}

exports.deleteVisitor = (req,res) => {
    Visitor.deleteVisitor(req.body, () => {
        res.send({ result : true });
    })
}