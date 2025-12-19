import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistrationDocument = Registration & Document;

@Schema({ timestamps: true })
export class Registration {
    @Prop({ required: true })
    eventId: string;

    @Prop({ required: true })
    eventName: string;

    @Prop({ required: true, enum: ['INDIVIDUAL', 'TEAM'] })
    type: string;

    @Prop()
    teamName: string;

    @Prop()
    leaderName: string; // Used as 'name' for individual

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    college: string;

    @Prop()
    courseYear: string;

    @Prop({ type: [{ name: String, email: String }] })
    members: { name: string; email: string }[];
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
