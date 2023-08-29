import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';


@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({        //defining the type orm for root module.   
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root', 
      password: 'root',
      database: 'nestJs',
      entities: [User],
      synchronize: true,
                //shouldn't be used in prod. deletes db data. 
    }),
  ],
})
export class AppModule {}
