import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "RAKOTO",
    description: "name of the user",
  })
  name: string;

  @ApiProperty({
    example: "Randria",
    description: "firstname of the user",
  })
  firstName: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
