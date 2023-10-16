import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('purchase')
export class PurchaseEntity {

    @PrimaryGeneratedColumn()
    purchase_id: number;

    @Column({ type: 'varchar', length: 255 })
    asset_name: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    asset_price: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'date' })
    purchase_date: Date;

}
