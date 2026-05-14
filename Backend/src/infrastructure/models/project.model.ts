import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Task } from './task.model';

@Table({
  tableName: 'projects',
  timestamps: false
})
export class Project extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column(DataType.TEXT)
  description!: string;

  @HasMany(() => Task)
  tasks!: Task[];
}