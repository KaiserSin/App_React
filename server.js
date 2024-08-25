import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname as getDirname } from 'path';

const app = express();

// Определение текущей директории для работы с ES-модулями
const __filename = fileURLToPath(import.meta.url);
const __dirname = getDirname(__filename);

// Указываем директорию для статических файлов
app.use(express.static(path.join(__dirname, 'dist')));

// Обработка всех маршрутов, чтобы на них отвечал index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Указываем порт для прослушивания
const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});