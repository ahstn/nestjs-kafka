import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'my-kafka',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'my-client',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'my-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
