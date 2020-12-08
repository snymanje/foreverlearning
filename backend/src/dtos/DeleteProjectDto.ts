import { IsString } from 'class-validator';

class DeleteProjectDto {
  @IsString()
  public id: string;
}

export default DeleteProjectDto;
