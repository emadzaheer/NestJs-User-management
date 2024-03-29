import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;    //this will auto increment
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ type: 'varchar', default: 'default_password', nullable: false })
    password: string;
    // @Column({ nullable: true, default: 0 })
    // age: number;
}