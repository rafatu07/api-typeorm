import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2000-01-01',
  email: 'rafa.tu@hotmail.com',
  name: 'Rafael Turino',
  password: '123456',
  role: Role.User,
};
