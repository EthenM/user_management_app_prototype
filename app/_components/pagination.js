import React from 'react'

export function Pagination({
  'aria-label': ariaLabel = 'Page navigation',
  className,
  ...props
}) {
  return <nav aria-label={ariaLabel} {...props} className={className + ' flex gap-x-2'} />
}

export function PaginationPrevious({
  href = null,
  className,
  children = 'Previous',
}) {
  return (
    <span className={className + ' grow basis-0'}>
      <a {...(href === null ? { disabled: true } : { href })} aria-label="Previous page">
        {children}
        <svg className="stroke-current size-8" data-slot="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </span>
  )
}

export function PaginationNext({
  href = null,
  className,
  children = 'Next',
}) {
  return (
    <span className={className + ' flex grow basis-0 justify-end'}>
      <a {...(href === null ? { disabled: true } : { href })} aria-label="Next page">
        {children}
        <svg className="stroke-current" data-slot="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </span>
  )
}

export function PaginationList({ className, ...props }) {
  return <span {...props} className={className + ' hidden items-baseline gap-x-2 sm:flex'} />
}

export function PaginationPage({
  href,
  className,
  current = false,
  children,
}) {
  return (
    <a
      href={href}
      aria-label={`Page ${children}`}
      aria-current={current ? 'page' : undefined}
      className={ className + ' min-w-[2.25rem]' }
    >
      <span className="-mx-0.5">{children}</span>
    </a>
  )
}

export function PaginationGap({
  className,
  children = <div>&hellip;</div>,
  ...props
}) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={
        className +
        ' w-[2.25rem] select-none text-center text-sm/6 font-semibold text-zinc-950 dark:text-white'
      }
    >
      {children}
    </span>
  )
}
