import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    example: 'Apprendre à coder nestJs à 00h',
    description: 'Todo title',
  })
  title: string;

  @ApiProperty({
    example:
      "J'ai appris à code nestJs hier soir de 11h du soir jusqu'au petit matin",
    description: 'Desciption',
  })
  description: string;

  @ApiProperty({
    example: 'Fait ou En cours ou Pause ou Arrêt ou Non Fait',
    description: 'Status du tâche à faire',
  })
  status: string;
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
