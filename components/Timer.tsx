import React, { useState, useEffect } from 'react'
import { useSudokuContext } from '../context/SudokuContext'
import moment from 'moment'

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every minute.
 */
export const Timer = () => {
  const [currentTime, setCurrentTime] = useState(moment())
  const { timeGameStarted, won } = useSudokuContext()

  useEffect(() => {
    if (!won) { setTimeout(() => { tick() }, 1000) }
  })

  function tick () {
    setCurrentTime(moment())
  }

  function getTimer () {
    const secondsTotal = currentTime.diff(timeGameStarted, 'seconds')
    if (secondsTotal <= 0) { return '00:00' }
    const duration = moment.duration(secondsTotal, 'seconds')
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()
    let stringTimer = ''

    stringTimer += hours === 0 ? '' + hours + ':' : ''
    stringTimer += minutes === 0 ? (minutes < 10 ? '0' : '') + minutes + ':' : '00:'
    stringTimer += seconds < 10 ? '0' + seconds : seconds

    return stringTimer
  }

  return (
    <div className="status__time">{getTimer()}
    </div>
  )
}
