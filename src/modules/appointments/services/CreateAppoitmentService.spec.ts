import AppError from '@shared/errors/AppError';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentServices from './CreateAppointmentService';

describe('CreateAppoitment', () => {
    it('should be able to create a new appointment', async () => {
        const fakeAppointmentRepository = new FakeAppointmentRepository();
        const createAppointment = new CreateAppointmentServices(
            fakeAppointmentRepository,
        );

        const appointment = await createAppointment.execute({
            date: new Date(),
            provider_id: '123123123',
        });

        expect(appointment).toHaveProperty('id');
        expect(appointment.provider_id).toBe('123123123');
    });

    it('should not be able to create two appointments on the sametime', async () => {
        const fakeAppointmentRepository = new FakeAppointmentRepository();
        const createAppointment = new CreateAppointmentServices(
            fakeAppointmentRepository,
        );

        const appointmentDate = new Date(2020, 4, 10, 11);

        await createAppointment.execute({
            date: appointmentDate,
            provider_id: '123123123',
        });

        await expect(
            createAppointment.execute({
                date: appointmentDate,
                provider_id: '123123123',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
