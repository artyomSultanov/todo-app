import { OptionType } from "models/types";

export const filterOptions: OptionType[] = [
  {
    id: 0,
    value: 'Все',
    config: {}
  },
  {
    id: 1,
    value: 'Выполненные',
    config: {
      completed: true
    }
  },
  {
    id: 2,
    value: 'Невыполненные',
    config: {
      completed: false
    }
  }
]
