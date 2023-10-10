import { TBoard, TInitialData } from '../../type';
import { TaskStepsList } from '../TaskStepsList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useOutletContext } from 'react-router';
import styled from 'styled-components';

interface IBoardTasksListProps {
  board: TBoard
}

interface IContainer {
  isdraggingover?: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  margin: 0 -8px;
  padding: 10px 0;
  transition: background-color .2s ease-in-out;
  background-color: ${(props) => props.isdraggingover ? 'lightblue' : 'inherit'}
`

export const BoardTasksList = (
    { board }: IBoardTasksListProps
  ) => {
    const [initialValue,,handleDragEnd]: [TInitialData, (boardName: string) => void, () => void] = useOutletContext();

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <Droppable
        droppableId="all-tasks"
        direction="horizontal"
        type="task"
      >
        {(provided, snapshot) => (
          <Container
            {...provided.droppableProps}
            ref={provided.innerRef}
            isdraggingover={snapshot.isDraggingOver}
          >
            {board.taskIds.map((taskId: string, index) => {
              const task = initialValue.tasks[taskId];
              
              return (
                <TaskStepsList
                  key={task.id}
                  task={task}
                  index={index}
                />
              )
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}
