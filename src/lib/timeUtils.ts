export const WORKING_HOURS = {
  start: 9, // 9:00 AM
  end: 23, // 11:00 PM
  fridayStart: 14, // 2:00 PM
  fridayEnd: 23, // 11:00 PM
};

export const SLOT_DURATION = 30; // minutes

export function generateTimeSlots(
  date: string,
  existingBookings: string[] = [],
  isFriday: boolean
): { time: string; available: boolean }[] {
  const slots: { time: string; available: boolean }[] = [];
  const startHour = isFriday ? WORKING_HOURS.fridayStart : WORKING_HOURS.start;
  const endHour = isFriday ? WORKING_HOURS.fridayEnd : WORKING_HOURS.end;

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += SLOT_DURATION) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      const available = !existingBookings.includes(time);
      slots.push({ time, available });
    }
  }

  return slots;
}

export function getNextAvailableSlot(
  date: string,
  time: string,
  existingBookings: string[],
  isFriday: boolean
): { date: string; time: string } | null {
  const slots = generateTimeSlots(date, existingBookings, isFriday);
  const selectedIndex = slots.findIndex((slot) => slot.time === time);

  // Check same day after selected time
  for (let i = selectedIndex + 1; i < slots.length; i++) {
    if (slots[i].available) {
      return { date, time: slots[i].time };
    }
  }

  // Return null if no available slots today
  return null;
}

export function getNextAvailableDay(
  date: string,
  existingBookings: string[]
): { date: string; time: string } | null {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  // Check next 7 days
  for (let dayOffset = 1; dayOffset <= 7; dayOffset++) {
    const checkDate = new Date(date);
    checkDate.setDate(checkDate.getDate() + dayOffset);

    const dateStr = checkDate.toISOString().split("T")[0];
    const dayOfWeek = checkDate.getDay();
    const isFriday = dayOfWeek === 5; // Friday in Arabic calendar

    const daySlots = generateTimeSlots(dateStr, [], isFriday);
    const firstAvailable = daySlots.find((slot) => slot.available);

    if (firstAvailable) {
      return { date: dateStr, time: firstAvailable.time };
    }
  }

  return null;
}

export function isDayOff(date: string, holidays: string[]): boolean {
  return holidays.includes(date);
}

export function formatTimeToArabic(hour: number, minute: number): string {
  const period = hour >= 12 ? "م" : "ص";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
}
