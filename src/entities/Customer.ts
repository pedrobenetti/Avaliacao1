import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("customers")
class Customer{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    cpf!: string;

    @Column()
    address!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column()
    neighbourhood!: string;

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

export { Customer };