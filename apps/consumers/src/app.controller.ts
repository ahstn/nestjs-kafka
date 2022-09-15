import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { RockEvent } from '@nestjs-kafka/types';

@Controller()
export class AppController {
  @EventPattern('medium.rocks')
  handleEvent(data: Record<string, RockEvent>) {
    console.log(`Received from topic: medium.rocks: ${JSON.stringify(data)}`);
  }
}
