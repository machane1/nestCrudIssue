import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Companycontroller } from './company.controller';
import { CompanyService } from './company.service';


@Module({
imports:[TypeOrmModule.forFeature([Company])],
controllers:[Companycontroller],
providers:[CompanyService],
exports:[CompanyService],
})
export class CompanyModule {}
