import { cva } from 'class-variance-authority'

const container = cva(
  `group relative cursor-pointer rounded-l-xl p-4 pt-2 pl-12 transition-colors`,
  {
    variants: {
      isFocused: {
        true: `
          bg-white
          hover:bg-white/90
        `,
        false: `hover:bg-accent/30`,
      },
    },
  },
)

const line = cva('absolute top-0 left-4 z-10 h-full w-0.5 transition-all', {
  variants: {
    isFocused: {
      true: 'bg-black',
      false: 'bg-muted',
    },
  },
})

const circle = cva(
  `
    absolute top-3 left-[11px] z-20 size-3 rounded-full border-2 transition-all
    group-hover:scale-200
  `,
  {
    variants: {
      isFocused: {
        true: 'border-black bg-white',
        false: `
          bg-black
          group-hover:bg-white
        `,
      },
    },
  },
)

const date = cva('font-mono text-xs', {
  variants: {
    isFocused: {
      true: 'text-black/60',
      false: 'text-muted',
    },
  },
})

const title = cva(
  `
    font-(family-name:--font-goth)
    leading-tight font-semibold
    group-hover:text-primary
  `,
  {
    variants: {
      isFocused: {
        true: 'text-black',
        false: 'text-white',
      },
    },
  },
)

const subtitle = cva('mt-1 text-xs leading-tight', {
  variants: {
    isFocused: {
      true: 'text-black/70',
      false: 'text-white/70',
    },
  },
})

export interface TimelineEvent {
  id: string
  date: string
  title: string
  subtitle: string
  description: string
  image: string
  category: string
}

export interface TimelineItemProps {
  event: TimelineEvent
  isFocused: boolean
  onClick: () => void
}

export function TimelineItem({ event, isFocused, onClick }: TimelineItemProps) {
  return (
    <div
      key={event.id}
      onClick={onClick}
      className={container({ isFocused })}
    >
      <div
        className={line({ isFocused })}
        aria-hidden="true"
      />
      <div className={circle({ isFocused })} />
      <div className={`
        transition-transform
        group-hover:scale-[1.02]
      `}
      >
        <p className={date({ isFocused })}>{event.date}</p>
        <p className={title({ isFocused })}>{event.title}</p>
        <p className={subtitle({ isFocused })}>{event.subtitle}</p>
      </div>
    </div>
  )
}
