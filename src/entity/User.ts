import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { CustomBaseEntity } from './CustomBaseEntity';

@Entity()
export class User extends CustomBaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column({
        unique: true,
    })
    email!:string;

    @Column({
        length: 500,
        select: false,
    })
    password?: string
}