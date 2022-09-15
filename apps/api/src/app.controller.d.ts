import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';
export declare class AppController implements OnModuleInit, OnModuleDestroy {
    private readonly appService;
    private readonly client;
    constructor(appService: AppService, client: ClientKafka);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    emit(): import("rxjs").Observable<any>;
}
//# sourceMappingURL=app.controller.d.ts.map