import { Body, Controller, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from '../model.dto/create-user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<boolean> {
    return of(true);
  }
}
