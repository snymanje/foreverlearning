import Project from '../../model/Projects';

export default async (id: string): Promise<void> => {
  await Project.findByIdAndRemove(id);
};
