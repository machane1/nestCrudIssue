import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private  userRepository: Repository<User>,
  ) {}

  async findall(): Promise<User[]>{
    return await this.userRepository.find();
  }

  async findOne(id:number): Promise<User>{
    return await this.userRepository.findOne({where : {id}});
  }

   async create(userDto : UserDto) : Promise<User>{
    const newUser = this.userRepository.create(userDto);
    return await this.userRepository.save(newUser);
   }

   async updateUser(id : number , userDto : UserDto):Promise<User>{
    await this.userRepository.update(id, userDto)
    return await this.userRepository.findOne({where : {id}});
   }

   async deleteUser(id : number):Promise<void>{
    await this.userRepository.delete(id);
   } 
}