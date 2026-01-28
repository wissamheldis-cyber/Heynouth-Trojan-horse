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

    const { dayKey, timeVal } = getNowInTimezone(timezone);

    // Check today's slots
    const todaySlots = hours[dayKey] || [];
    for (const [start, end] of todaySlots) {
        if (checkSlot(timeVal, start, end)) return true;
    }

    // Check yesterday's slots (overnight)
    const yesterdayKey = getYesterdayKey(dayKey);
    const yesterdaySlots = hours[yesterdayKey] || [];
    for (const [start, end] of yesterdaySlots) {
        if (isOvernight(start, end)) {
            // Started yesterday, ends today. Check if we are before the end time.
            const endVal = timeToMinutes(end);
            if (timeVal < endVal) return true;
        }
    }

    return false;
}

/**
 * Returns a formatted string of today's hours.
 * 1 slot: "10:00 — 02:00"
 * 2 slots: "10:00 — 14:00 / 18:00 — 22:00"
 * Closed: "Fermé"
 * Overnight: Handled naturally (e.g. 10:00 — 02:00)
 */
export function formatTodayHoursLabel(hours: WeekHours | undefined, timezone: string = "Europe/Paris"): string {
    if (!hours) return "Fermé";

    const { dayKey } = getNowInTimezone(timezone);
    const slots = hours[dayKey];

    if (!slots || slots.length === 0) {
        return "Fermé";
    }

    // Format each slot
    const formattedSlots = slots.map(([start, end]) => `${start} — ${end}`);
    return formattedSlots.join(" / ");
}

// --- Helpers ---

function getNowInTimezone(timezone: string): { dayKey: DayKey; timeVal: number } {
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

    const weekdayShort = part("weekday")?.toLowerCase() as string;
    const currentHour = parseInt(part("hour") || "0", 10);
    const currentMinute = parseInt(part("minute") || "0", 10);
    const timeVal = currentHour * 60 + currentMinute;

    const dayMap: Record<string, DayKey> = {
        sun: "sun",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
    };

    return {
        dayKey: dayMap[weekdayShort] || "mon", // Fallback shouldn't happen
        timeVal,
    };
}

function getYesterdayKey(today: DayKey): DayKey {
    const days: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const idx = days.indexOf(today);
    return days[(idx - 1 + 7) % 7];
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
        // Overnight
        return currentVal >= startVal;
    } else {
        // Normal
        return currentVal >= startVal && currentVal < endVal;
    }
}
