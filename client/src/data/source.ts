export const initialData = {
  steps: {
    'step-1': { id: 'step-1', content: 'Подключить Redux-1', position: 0 },
    'step-2': { id: 'step-2', content: 'Подключить Redux-2', position: 1 },
    'step-3': { id: 'step-3', content: 'Подключить Redux-3', position: 2 },
    'step-4': { id: 'step-4', content: 'Подключить Redux-4', position: 3 },
    'step-5': { id: 'step-5', content: 'Установить Redux-1', position: 0 },
    'step-6': { id: 'step-6', content: 'Установить Redux-2', position: 1 },
    'step-7': { id: 'step-7', content: 'Установить Redux-3', position: 2 },
    'step-8': { id: 'step-8', content: 'Установить Redux-4', position: 3 },
  },
  tasks: {
    'task-1': {
        id: 'task-1',
        title: 'Работа с данными',
        stepIds: ['step-1', 'step-2', 'step-3', 'step-4'],
        position: 0
      },
    'task-2': {
        id: 'task-2',
        title: 'Настройка окружения',
        stepIds: ['step-5', 'step-6', 'step-7', 'step-8'],
        position: 1
      },
    'task-3': {
        id: 'task-3',
        title: 'Решение проблем',
        stepIds: [],
        position: 2
      },
    'task-4': {
        id: 'task-3',
        title: 'Поиск решений',
        stepIds: [],
        position: 3
      },
  },
  boards: {
    'board-1': {
      id: 'board-1',
      title: 'Данные',
      taskIds: ['task-1', 'task-3'],
      position: 0
  },
    'board-2': {
      id: 'board-2',
      title: 'Окружение',
      taskIds: ['task-2', 'task-4'],
      position: 1
    },
  },
  boardOrder: ['board-1', 'board-2'],
}