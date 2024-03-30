import { Tabs, TabsProps } from "antd"

export const UITabs = ({
  items,
  activeKey
}: {
  items: TabsProps['items'],
  activeKey: string | undefined
}) => {
  return (
    <Tabs items={items} activeKey={activeKey} />
  )
}