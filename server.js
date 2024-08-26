import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname as getDirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = getDirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


const PORT = 5172;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});


