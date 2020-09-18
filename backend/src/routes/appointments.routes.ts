import { getCustomRepository } from 'typeorm';
import { Router } from 'express';
import { parseISO } from 'date-fns';

// Middleware
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// Repositories
import AppointmensRepository from '../repositories/AppointmentsRepository';

// Services
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmensRepository = getCustomRepository(AppointmensRepository);
  const appointments = await appointmensRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointmentService = new CreateAppointmentService();

  const appointment = await createAppointmentService.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
