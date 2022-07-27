export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export type TodosType = TodoType[]

export interface TodoFilterType {
  onFilterClick(optionNumber: number): void
}

export type ConfigType = Omit<TodoType | {}, 'id' | 'title'>

export interface OptionType {
  id: number
  value: string
  config: ConfigType | {}
}
