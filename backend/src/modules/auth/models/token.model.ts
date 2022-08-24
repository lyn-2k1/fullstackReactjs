import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { GraphQLJWT } from 'graphql-scalars';

export class Token {
  @ApiProperty({ type: String })
  accessToken: string;
  @ApiProperty({ type: String })
  refreshToken: string;
}
