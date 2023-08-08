// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가 왔다' },
//         { id: 2, name: '이찬혁', comment: '으라차차' },
//     ];
// };

const mysql = require('mysql');

// mysql connect
const conn = mysql.createConnection ({
    host:'127.0.0.1',   
    user:'minhyun',
    password:'aledma010@',
    database:'kdt9',
    port:3306,
})
conn.connect((err) => {
    if(err) {
        console.log(err)
        return;
    }
    console.log('connect')
})

exports.getVisitors = (callback) => {
    // res.render('visitor', { data: Visitor.getVisitors() });
    const query = 'select * from visitor';
    conn.query (query, (err,rows) => {
        console.log(rows);
        callback(rows);
    });
};

exports.getVisitor = (id,callback) => {
    const query = `select * from visitor WHERE id=${id}`;
    conn.query(query, (err,rows) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(rows);
        // res.render('visitor', { data : rows });
    })
}

exports.postVisitor = (data, callback) => {
    const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}','${data.comment}')`;
    conn.query(query, (err,rows) => {
        console.log('rows',rows);
        callback(rows)
    });
}

exports.patchVisitor = (data, callback) => {
    const query = `Update visitor set name='${data.name}', comment='${data.comment}' WHERE id='${data.id}'`
    conn.query(query, (err,rows) => {
        console.log('rows',rows)
        if (err) {
            console.log(err);
            // res.send({result:false});
            return;
        }
        callback();
    })
}

exports.deleteVisitor = (data, callback) => {
    const query = `delete from visitor WHERE id=${req.body.id}`
    conn.query(query, (err,rows) => {
        if (err) {
            console.log(err);
            return;
        }
        callback();
    })
}