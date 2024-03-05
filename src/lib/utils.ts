import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function monthsFromNow(isoDate: string) {
  // Create Date objects for the current date and the ISO 8604 date
  const currentDate = new Date()
  const targetDate = new Date(isoDate)

  // Handle negative months and year changes
  if (targetDate < currentDate) {
    targetDate.setFullYear(targetDate.getFullYear() + 1)
  }

  // Calculate the difference in years and months
  const yearDiff = targetDate.getFullYear() - currentDate.getFullYear()
  const monthDiff = targetDate.getMonth() - currentDate.getMonth()

  // Round down the number of months
  return yearDiff * 12 + monthDiff
}

/**
 * This function creates formatted date from iso 8601 date string.
 * @param {isoDate} isoDate - ISO 8601 date string
 * @returns {formattedDate} Formatted date
 */

export function formatISODate(isoDate: string): string {
  const date = new Date(isoDate)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
  return formattedDate
}
