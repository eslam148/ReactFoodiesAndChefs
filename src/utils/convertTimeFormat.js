export const convertTime24HTo12H = (time24) => {
    if (!time24) return ""; // Return empty string if no time provided

    // Split the time string into hours and minutes
    const [hour, minute] = time24.split(":").map(Number);

    // Determine AM/PM
    const period = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const hour12 = ((hour + 11) % 12) + 1;

    // Format the result as hh:mm AM/PM
    return `${String(hour12).padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
};

export const convertTime24HToIso = (date, time24) => {
    if (!time24 || !date) return ""; // Return empty string if no time provided
    // Split the 12-hour format time into components (e.g., "3:45 PM")
    const [time, modifier] = time24.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    // Convert 12-hour format to 24-hour format
    if (modifier === "PM" && hours !== 12) {
        hours += 12; // Add 12 for PM (except for 12 PM)
    } else if (modifier === "AM" && hours === 12) {
        hours = 0; // Set midnight to 00
    }

    // Create a Date object for the provided date
    const isoDate = new Date(date);
    isoDate.setHours(hours, minutes, 0, 0); // Set hours and minutes

    // Return the ISO string
    return isoDate.toISOString();

}

export const convertTimeIsoTo24H = (timeIso) => {
    if (!timeIso) return ""; // Return empty string if no time provided

    const date = new Date(timeIso);

    // Extract hours, minutes, and determine AM/PM
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // 0 becomes 12 in 12-hour format

    // Return the formatted time
    return `${hours}:${minutes} ${ampm}`;

}

export const getHoursAndMinutesDifference = (startTime, endTime) => {
    // Convert start and end times to Date objects
    const startDate = new Date(startTime);
    let endDate = new Date(endTime);

    // Check if endDate is earlier than startDate (i.e., the time spans to the next day)
    if (endDate < startDate) {
        // Add 24 hours to the endDate
        endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
    }

    // Get the difference in milliseconds
    const differenceInMs = endDate - startDate;

    // Convert milliseconds to hours and minutes
    const totalMinutes = Math.floor(differenceInMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
};
