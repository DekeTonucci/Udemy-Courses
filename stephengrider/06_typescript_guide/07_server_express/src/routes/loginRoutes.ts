import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Hello There!</h1>
    </div>
  `)
});

export { router };
