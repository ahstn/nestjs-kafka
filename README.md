# nestjs-kafka

## 🚀 Features

-   [TurboRepo] as a monorepo build tool.
    -   [tsconfig/base.json] for all modules and framework specific config [tsconfig/nestjs.json] for NestJS apps.
-   Two [NestJS] microservices packaged with Docker.
    -   [apps/api/] : REST API producing to Kafka
    -   [apps/consumers/] : Service for consuming Kafka Events, see: [Kafka | NestJS]
    -   Strictly typed events via type definitions in [packages/types/]
-   Kafka, Schema Registry and [provectus/kafka-ui].
    -   For Schema Registry info, see: [Kafka with AVRO, JSON and Protobuf | medium]
-   Monitoring using [OpenTelemetry] for metrics and traces, and [Vector] for logs.
    -   OpenTelemetry Collector using [infra/opentelemetry-collector.yaml] with and[kafka-metrics-receiver], [prometheus-exporter]
    -   Vector Agent using [infra/vector.toml] listening to Docker logs and Kafka.

## Usage

Start Kafka, Schema Registry and UI with:

```shell
docker-compose up -d
```

Optionally start OpenTelemetry and Vector as well:

```shell
docker-compose --profile telemetry up -d
```

Start the [NestJS] microservers with:

```shell
npx turbo run dev
```

[turborepo]: https://turborepo.org/
[nestjs]: https://docs.nestjs.com
[kafka | nestjs]: https://docs.nestjs.com/microservices/kafka
[kafka with avro, json and protobuf | medium]: https://simon-aubury.medium.com/kafka-with-avro-vs-kafka-with-protobuf-vs-kafka-with-json-schema-667494cbb2af
[kafka-metrics-receiver]: https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/kafkametricsreceiver
[prometheus-exporter]: https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/prometheusexporter
[provectus/kafka-ui]: https://github.com/provectus/kafka-ui
[opentelemetry]: https://opentelemetry.io/
[vector]: https://vector.dev/
[apps/api/]: ./apps/api/
[apps/consumers/]: ./apps/consumers/
[packages/types/]: ./packages/types/
[tsconfig/base.json]: ./packages/tsconfig/base.json
[tsconfig/nestjs.json]: ./packages/tsconfig/base.json
[infra/opentelemetry-collector.yaml]: ./infra/opentelemetry-collector.yaml
[infra/vector.toml]: ../infra/vector.toml
