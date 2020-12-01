import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentService';
import { classToClass } from 'class-transformer';

export default class ProviderAppointmentsController {
    public async index(req: Request, res: Response): Promise<Response> {
        const provider_id = req.user.id;
        const { day, month, year } = req.query;

        const listProviderAppointment = container.resolve(
            ListProviderAppointmentService,
        );

        const appointment = await listProviderAppointment.execute({
            provider_id,
            day: Number(day),
            month: Number(month),
            year: Number(year),
        });

        return res.json(classToClass(appointment));
    }
}
