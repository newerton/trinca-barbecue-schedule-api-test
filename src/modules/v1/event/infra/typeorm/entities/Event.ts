import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  AfterLoad,
} from 'typeorm';

import EventItem from './EventItem';

@Entity('event')
@Exclude()
class Event {
  @PrimaryGeneratedColumn('uuid')
  @Expose({ groups: ['store', 'view'] })
  id: string;

  @Column()
  @Expose({ groups: ['store', 'view'] })
  title: string;

  @Column()
  @Expose({ groups: ['view'] })
  description: string;

  @Column()
  @Expose({ groups: ['store', 'view'] })
  date: Date;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @Expose({ groups: ['view'] })
  @OneToMany(() => EventItem, (eventItem: EventItem) => eventItem.event, {
    eager: true,
  })
  @JoinColumn({ name: 'id', referencedColumnName: 'event_id' })
  items: EventItem[];

  @Expose({ name: 'users' })
  get users(): number {
    return this.items.map((item: EventItem) => item.name).length;
  }

  @Expose({ name: 'total' })
  get total(): number {
    const total = this.items
      .map((item: EventItem) => item.amount)
      .reduce((total, value) => total + value, 0);
    return Math.round(total * 1e2) / 1e2;
  }
}

export default Event;
