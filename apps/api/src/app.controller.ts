import {log} from '@nestjs-kafka/logger';
import {Controller, Get, Inject, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {ClientKafka} from '@nestjs/microservices';
import {RockEvent} from '@nestjs-kafka/types';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {
    constructor(@Inject('my-kafka') private readonly client: ClientKafka) {}

    async onModuleInit() {
        ['medium.rocks'].forEach((key) => this.client.subscribeToResponseOf(`${key}`));
        await this.client.connect();
    }

    async onModuleDestroy() {
        await this.client.close();
    }

    @Get('kafka-emit')
    emit() {
        log('emitting event to medium.rocks');
        // client.send can be used to fetch a response
        const e: RockEvent = {subject: 'test', date: new Date().toString()};
        return this.client.emit('medium.rocks', e);
    }
}
