import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSales1649351850904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "product_id",
                        type: "uuid"
                    },
                    {
                        name: "client_id",
                        type: "uuid"
                    },
                    {
                        name: "quantity",
                        type: "integer"
                    },
                    {
                        name: "grossTotal",
                        type: "decimal"
                    },
                    {
                        name: "discount",
                        type: "decimal"
                    },
                    {
                        name: "amount",
                        type: "decimal"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sales");
    }

}
