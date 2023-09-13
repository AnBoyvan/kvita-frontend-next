import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const filePath = path.join(
      process.cwd(),
      'src',
      'config',
      'admin.json'
    );

    const newData = req.body;

    await fs.writeFile(filePath, JSON.stringify(newData, null, 2));

    return res
      .status(200)
      .json({ message: 'Дані оновлено успішно.' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Помилка при оновленні даних.' });
  }
}
