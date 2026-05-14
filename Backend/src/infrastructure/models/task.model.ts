import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Project } from './project.model';

@Table({
  tableName: 'tasks',
  timestamps: false
})
export class Task extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title!: string;

  @Column(DataType.TEXT)
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status!: string;

  @ForeignKey(() => Project)
  @Column(DataType.INTEGER)
  project_id!: number;

  @BelongsTo(() => Project)
  project!: Project;
}