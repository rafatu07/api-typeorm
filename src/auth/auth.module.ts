import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        JwtModule.register({
        secret: "11qj&6U£^sF0}:6`Xv,5;||,rV0]2/Nf"}),
        UserModule,
        PrismaModule,
        ],
    controllers: [AuthController],
    providers: [AuthService]
}) 

export class AuthModule {

}