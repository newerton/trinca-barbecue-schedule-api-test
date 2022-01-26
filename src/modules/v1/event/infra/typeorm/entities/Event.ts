import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import EventItem from './EventItem';

@Entity('event')
class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @OneToMany(() => EventItem, (eventItem: EventItem) => eventItem.event, {
    eager: true,
  })
  @JoinColumn({ name: 'id', referencedColumnName: 'event_id' })
  items: EventItem;
}

export default Event;
