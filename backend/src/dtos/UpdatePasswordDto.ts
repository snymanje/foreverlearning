import { IsString } from 'class-validator';

/**
 * @swagger
 *  components:
 *    schemas:
 *      UpdatePassword DTO:
 *        type: object
 *        required:
 *          - passwordCurrent
 *          - password
 *          - passwordConfirm
 *        properties:
 *          passwordCurrent:
 *            type: string
 *            format: password
 *          password:
 *            type: string
 *            format: password
 *          passwordConfirm:
 *            type: string
 *            format: password
 *        example:
 *           passwordCurrent: "1234567895"
 *           password: "123456"
 *           passwordConfirm: "123456"
 */
class updatePasswordDto {
  @IsString()
  public password: string;

  @IsString()
  public passwordConfirm: string;

  @IsString()
  public passwordCurrent: string;
}

export default updatePasswordDto;
