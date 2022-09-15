import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('medium.rocks')
  handleEvent(data: Record<string, unknown>) {
    console.log(`Received from topic: medium.rocks: ${JSON.stringify(data)}`);
  }
}
