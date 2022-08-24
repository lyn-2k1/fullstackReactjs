import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PasswordService } from 'src/modules/auth/password.service';

@Module({
  imports: [],
  providers: [UsersService, PasswordService],
  exports: [UsersService],
})
export class UsersModule {}
