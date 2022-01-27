import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  AfterLoad,
} from 'typeorm';

import Event from './Event';

@Entity('event_item')
class EventItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  @Exclude()
  event_id: string;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  has_beer: boolean;

  @Column()
  paid: boolean;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @ManyToOne(() => Event, event => event.items)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @AfterLoad() _convertNumerics() {
    this.amount = parseFloat(this.amount as any);
  }
}

export default EventItem;
