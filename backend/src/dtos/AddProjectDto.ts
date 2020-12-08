import { IsString } from 'class-validator';

/**
 * @swagger
 *  components:
 *    schemas:
 *      AddProjectDto:
 *        type: object
 *        required:
 *          - title
 *          - techStack
 *          - features
 *        properties:
 *          title:
 *            type: string
 *          techStack:
 *            type: string
 *          features:
 *            type: string
 *        example:
 *           title: "Build a webapp to track my tutorials"
 *           techStack: "Node, React, Nextjs, Mongoose, TypeScript"
 *           features: "Authentication, Autherization, Google sign in, TypeScript, etc"
 */
class AddProjectDto {
  @IsString()
  public title: string;

  @IsString()
  public techStack: string;

  @IsString()
  public features: string;
}

export default AddProjectDto;
