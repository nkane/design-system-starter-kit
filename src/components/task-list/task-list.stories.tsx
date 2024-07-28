import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';

import { TaskListProvider } from './task-list-context';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
        response.json(),
      );
      return { tasks };
    },
  ],
  decorators: [
    (Story, context) => {
      return (
        <TaskListProvider
          tasks={context.loaded.tasks}
          // tasks={[
          //   { id: '1', title: 'Task 1', completed: false },
          //   { id: '2', title: 'Task 2', completed: false },
          //   { id: '3', title: 'Task 3', completed: false },
          // ]}
        >
          <Story {...context} />
        </TaskListProvider>
      );
    },
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {},
};
