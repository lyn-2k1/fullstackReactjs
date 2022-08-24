import { Token } from './models/token.model';
import { LoginDTO } from './dto/login.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from './dto/signup.dto';
import {
  ApiBearerAuth,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma, Role, User } from '@prisma/client';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ReqUser } from 'src/common/decorators/user.decorator';
import { RefreshTokenInput } from './dto/refresh-token.input';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // login
  @ApiResponse({
    type: [Token],
  })
  @Post('login')
  async login(@Body() data: LoginDTO) {
    const { accessToken, refreshToken } = await this.authService.login(
      data.email,
      data.password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('register')
  async signup(@Body() data: SignupDTO): Promise<Token> {
    data.email = data.email;
    const { accessToken, refreshToken } = await this.authService.createUser(
      data
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  @ApiResponse({
    type: [Token],
  })
  @Post('refresh-token')
  async refreshToken(@Body() data: RefreshTokenInput) {
    return this.authService.refreshToken(data.token);
  }

  @ApiBearerAuth()
  @Get('me')
  @UseGuards(JwtGuard)
  @Roles(Role.ADMIN)
  async me(@ReqUser() user: User) {
    return user;
  }
}
