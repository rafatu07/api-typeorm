import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const UserEntityList: UserEntity[] = [
  {
    name: 'Rafael Turino',
    email: 'rafa.tu@hotmail.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$sih/9FLcTKReyp1X4o5gs.r6.G1cKoplydB/vOP87x.njL0L/z6re',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Joceli',
    email: 'jo_fani@hotmail.com',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$sih/9FLcTKReyp1X4o5gs.r6.G1cKoplydB/vOP87x.njL0L/z6re',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Miguel Pavanetti',
    email: 'mi_pavanetti@hotmail.com',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '$2b$10$sih/9FLcTKReyp1X4o5gs.r6.G1cKoplydB/vOP87x.njL0L/z6re',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
