export type DayKey = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type WeekHours = {
    [key in DayKey]?: string[][];
};

/**
 * Checks if the shop is currently open based on its timezone and hours.
 * Supports overnight hours (e.g. "10:00" to "02:00").
 */
export function isShopOpen(hours: WeekHours | undefined, timezone: string = "Europe/Paris"): boolean {
    if (!hours) return false;

    // 1. Get current time in the shop's timezone
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        weekday: "short",
    });

    const parts = formatter.formatToParts(now);
    const part = (type: string) => parts.find((p) => p.type === type)?.value;

    const weekdayShort = part("weekday")?.toLowerCase() as string; // "mon", "tue"...
    const currentHour = parseInt(part("hour") || "0", 10);
    const currentMinute = parseInt(part("minute") || "0", 10);
    const currentTimeVal = currentHour * 60 + currentMinute;

    // Map Intl weekday ("Mon", "Tue") to our keys ("mon", "tue")
    // Note: Intl "en-US" returns "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    const dayMap: Record<string, DayKey> = {
        sun: "sun",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
    };

    // We strictly use the 3-char lowercase from Intl output which matches keys if we lowerCase it
    // But check strictly to be safe.
    const currentDayKey = dayMap[weekdayShort];
    if (!currentDayKey) return false; // Should not happen

    // Check today's slots
    const todaySlots = hours[currentDayKey] || [];
    for (const [start, end] of todaySlots) {
        if (checkSlot(currentTimeVal, start, end)) return true;
    }

    // Check yesterday's slots that might span into today (overnight)
    // We need yesterday's key
    const days: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const todayIndex = days.indexOf(currentDayKey);
    const yesterdayIndex = (todayIndex - 1 + 7) % 7;
    const yesterdayKey = days[yesterdayIndex];

    const yesterdaySlots = hours[yesterdayKey] || [];
    for (const [start, end] of yesterdaySlots) {
        if (isOvernight(start, end)) {
            // If it was an overnight slot started yesterday, we check if we are strictly < end time today
            // An overnight slot [22:00, 02:00] on Monday means:
            // On Monday: open from 22:00 to 23:59
            // On Tuesday: open from 00:00 to 02:00
            // Here we are on Tuesday (currentDayKey). We check if we are in the "tail" of yesterday's slot.
            const endVal = timeToMinutes(end);
            if (currentTimeVal < endVal) return true;
        }
    }

    return false;
}

function timeToMinutes(timeStr: string): number {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
}

function isOvernight(start: string, end: string): boolean {
    return timeToMinutes(end) < timeToMinutes(start);
}

function checkSlot(currentVal: number, start: string, end: string): boolean {
    const startVal = timeToMinutes(start);
    const endVal = timeToMinutes(end);

    if (endVal < startVal) {
        // Overnight slot (e.g. 10:00 to 02:00)
        // Today, this covers from startVal to 23:59.
        // The "next day" part is handled by the "Check yesterday's slots" logic.
        // So here we only check checks if we are >= startVal.
        return currentVal >= startVal;
    } else {
        // Normal slot (e.g. 08:00 to 20:00)
        return currentVal >= startVal && currentVal < endVal;
    }
}
