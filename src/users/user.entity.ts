import { Company } from 'src/company/company.entity';
import {Entity , Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name : string;

    @Column()
    email : string;

    @Column({default : 'active'})
    status : string;

    @ManyToOne(()=>Company, (company)=> company.users)
    company : Company;

    @Column()
    companyId : number;
}