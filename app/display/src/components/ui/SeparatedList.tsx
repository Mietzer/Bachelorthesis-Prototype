import { Fragment, type ReactNode } from 'react'

export interface SeparatedListProps {
  items: Array<ReactNode | null | undefined | false>
  separator?: string
}

export function SeparatedList({ items, separator = '·' }: SeparatedListProps) {
  const visible = items.filter(Boolean)

  return (
    <>
      {visible.map((item, index) => (
        <Fragment key={index}>
          {/* Decorative only: screen readers already pause between elements. */}
          {index > 0 && <span aria-hidden="true"> {separator} </span>}
          {item}
        </Fragment>
      ))}
    </>
  )
}
