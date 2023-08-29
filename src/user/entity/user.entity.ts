import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
// constructor(parameters) {}
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    // @Column({default:true})
    // isActive: boolean;
}