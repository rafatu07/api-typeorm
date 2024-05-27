import { Module } from "@nestjs/common";
import { UserController } from "./user.controlle";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [],
    exports: [],
})
export class UserModule {}