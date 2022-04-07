import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("sales")
class Sale{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    product_id!: string;

    @Column()
    client_id!: string;

    @Column()
    quantity!: number;

    @Column()
    grossTotal!: number;

    @Column()
    discount!: number;

    @Column()
    amount!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }
}

export { Sale };