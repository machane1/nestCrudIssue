import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Company } from "./company.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CompanyService extends TypeOrmCrudService<Company>{
    constructor(@InjectRepository(Company) repo){
        super(repo);
    }

    getRepo(){
        return this.repo;
    }
}