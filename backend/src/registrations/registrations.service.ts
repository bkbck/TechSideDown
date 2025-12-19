import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from './schemas/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Injectable()
export class RegistrationsService {
    constructor(
        @InjectModel(Registration.name)
        private registrationModel: Model<RegistrationDocument>,
    ) { }

    async create(createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
        const createdRegistration = new this.registrationModel(createRegistrationDto);
        return createdRegistration.save();
    }

    async findAll(): Promise<Registration[]> {
        return this.registrationModel.find().exec();
    }

    async count(): Promise<number> {
        return this.registrationModel.countDocuments().exec();
    }
}
