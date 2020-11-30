import { IsEmail, IsString } from 'class-validator';

/**
 * @swagger
 *  components:
 *    schemas:
 *      LoginUserDto:
 *        type: object
 *        required:
 *          - password
 *          - email
 *        properties:
 *          password:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *        example:
 *           email: fake@gmail.com
 *           password: fake123
 */
class loginUserDto {
  @IsString()
  public password: string;

  @IsString()
  @IsEmail()
  public email: string;
}

export default loginUserDto;
