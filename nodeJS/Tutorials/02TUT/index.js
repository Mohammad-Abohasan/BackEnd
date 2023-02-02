
const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);

        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'PromiseWrite.txt'), data)
        
        await fsPromises.appendFile(path.join(__dirname, 'files', 'PromiseWrite.txt'), '\n\nHi, my name is Ahmad.')
        await fsPromises.appendFile(path.join(__dirname, 'files', 'PromiseWrite.txt'), '\n\nNice to meet you.')
        await fsPromises.rename(path.join(__dirname, 'files', 'PromiseWrite.txt'), path.join(__dirname, 'files', 'PromiseComplete.txt'))

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'PromiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch(err) {
        throw err;
    }
}

fileOps()

// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// })

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// })


// console.log('hello');


// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hi, my name is Ahmad.', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nNice to meet you.', (err, data) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'Newreply.txt'), 
//         (err, data) => {
//             if (err) {
//                 throw err;
//             }
//             console.log('Rename complete');
//         })
//     })

// })


// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text.', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Append complete');
// })




process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
