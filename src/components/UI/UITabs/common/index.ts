import { TabsProps } from "antd";

export const placeItems: TabsProps['items'] = [
  {
    key: 'daily-table',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: 'graph',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: 'map',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
]