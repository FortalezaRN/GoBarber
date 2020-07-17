import { Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const appointment = [];
  return response.json({ msg: 'Alo vo' });
});

export default appointmentsRouter;
