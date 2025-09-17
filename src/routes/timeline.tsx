import type { TimelineEvent } from '@/components/TimelineItem'

import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import imgHkust from '@/assets/hkust.jpg'
import { TimelineItem } from '@/components/TimelineItem'

export const Route = createFileRoute('/timeline')({
  component: RouteComponent,
})
const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: 'September 2022 - Current',
    title: 'BEng in Computer Engineering',
    subtitle: 'The Hong Kong University of Science and Technology',
    description: `
### Bachelor of Engineering in Computer Engineering

I began my studies at HKUST, embarking on a journey of learning and growth in the field of Computer Engineering.
Image Credits: HKUST
`,
    image: imgHkust,
    category: 'Education',
  },
  {
    id: '2',
    date: 'Fall 2024-25',
    title: 'Elec3300 - Smart Curtain',
    subtitle: 'A smart curtain that can be controlled by sensors and a mobile app',
    description: `
### ELEC3300 - Smart Curtain

This project involved designing and implementing a smart curtain system that can be controlled through various sensors and a mobile application. The system utilizes microcontrollers to manage the curtain's movements based on environmental inputs such as light and temperature.

- STM32 Micro-controller
- Mobile app using React Native + Expo
- Bluetooth communication based on HC-05 module
`,
    image: imgHkust,
    category: 'Academic Projects',
  },
  {
    id: '3',
    date: 'Spring 2024-25',
    title: 'Comp4521 - Voice-based Personal Assistant',
    subtitle: 'Create tasks and log expenses using voice commands',
    description: `
### Voice-based Personal Assistant

- React Native + Expo for mobile app
- Realm-JS as the database
- Call native voice recognition APIs on Android and iOS
- Call LLM APIs to generate typed JSON responses with langchain.js
`,
    image: imgHkust,
    category: 'Academic Projects',
  },
  {
    id: '4',
    date: 'Spring 2024-25',
    title: 'Comp4211 - NER Tagging Model',
    subtitle: 'Fine-tuning a BERT model to tag NER in a given text',
    description: `
### NER Tagging Model

Fine-tuning a BERT model to tag NER in a given text.
`,
    image: imgHkust,
    category: 'Academic Projects',
  },
  {
    id: '5',
    date: 'June 2024 - August 2024',
    title: 'Field Operations Intern',
    subtitle: 'HKT Limited',
    description: `
### Field Operations Intern at HKT Limited

- Created 20 python scripts to automate the process of data collection and analysis.
- Created a web portal for the team to query the location and spec of devices.
- Created another web portal for the team to manage stock items.
`,
    image: imgHkust,
    category: 'Work Experience',
  },
  {
    id: '6',
    date: 'November 2024 - March 2025',
    title: 'Associate Engineer',
    subtitle: 'HKT Limited',
    description: `
### Associate Engineer at HKT Limited

Assisted in software development and system design projects.
`,
    image: imgHkust,
    category: 'Work Experience',
  },
]

export interface TimelineItemProps {
  event: TimelineEvent
  isFocused: boolean
  onClick: () => void
}

function RouteComponent() {
  const [focusedId, setFocusedId] = useState('1')
  const focusedItem = timelineEvents.find(item => item.id === focusedId) || timelineEvents[0]

  return (
    <div className="relative h-[calc(100vh-var(--header-height))]">
      <div className={`
        h-full snap-y snap-mandatory grid-cols-1 overflow-y-scroll
      `}
      >
        <div
          className="relative flex h-full items-stretch bg-cover bg-right"
          style={{ backgroundImage: `url(${focusedItem.image})` }}
        >
          <div className="flex grow flex-col justify-stretch">
            <div className="grow"></div>

            <div className={`
              m-8 prose min-h-12 rounded-2xl bg-black/70 p-4 text-white
              backdrop-blur-sm prose-invert
            `}
            >
              <ReactMarkdown>{focusedItem.description}</ReactMarkdown>
            </div>
          </div>

          <div className="flex w-[300px] bg-black/80 pl-4">
            <div className="relative flex flex-col gap-y-2 py-8">
              <div
                className="absolute top-0 left-4 z-10 h-full w-0.5 bg-muted"
                aria-hidden="true"
              />
              {timelineEvents.map(item => (
                <TimelineItem
                  key={item.id}
                  event={item}
                  isFocused={focusedItem.id === item.id}
                  onClick={() => setFocusedId(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
