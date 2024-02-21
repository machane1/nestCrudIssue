import { Controller, Req } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { Crud , CrudController, CrudRequest, GetManyDefaultResponse, Override, ParsedBody, ParsedRequest , } from "@nestjsx/crud";
import { Company } from "./company.entity";

@Crud({
    model:{
        type : Company,
    },
})

@Controller('company')
export class Companycontroller implements CrudController<Company> {
    constructor(public service : CompanyService) {}

    get base():CrudController<Company> {
        return this;
      }

    //   @Override('getManyBase')
    //   async getMany(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest): Promise<Company[] | GetManyDefaultResponse<Company>> {
    //     return this.base.service.getMany(crudReq);
    //   }

      @Override('getOneBase')
      async getOne(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest): Promise<Company> {
        return this.base.service.getOne(crudReq);
      }

      @Override('createOneBase')
      async createOne(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest, @ParsedBody() dto: Company): Promise<Company> {
        return this.base.service.createOne(crudReq, dto);
      }

    //   @Override('createManyBase')
    //   async createMany(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest, @ParsedBody() dto: Company[]): Promise<Company[]> {
    //     return this.base.service.createMany(crudReq, dto);
    //   }

      @Override('updateOneBase')
      async updateOne(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest, @ParsedBody() dto: Company): Promise<Company> {
        return this.base.service.updateOne(crudReq, dto);
      }

      @Override('replaceOneBase')
      async replaceOne(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest, @ParsedBody() dto: Company): Promise<Company> {
        return this.base.service.replaceOne(crudReq, dto);
      }

      @Override('deleteOneBase')
      async deleteOne(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest): Promise<void | Company> {
        return this.base.service.deleteOne(crudReq);
      }

      @Override('recoverOneBase')
      async recoverOne(@Req() req: CrudRequest, @ParsedRequest() crudReq: CrudRequest): Promise<void | Company> {
        return this.base.service.recoverOne(crudReq);
      }
    

    
}