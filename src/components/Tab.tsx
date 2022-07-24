import React, { ReactElement } from 'react'

type Props = {
  title: string
  children:ReactElement[]
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab