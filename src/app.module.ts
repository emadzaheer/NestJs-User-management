import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [User],
      database: 'nestjsusermanagement',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
