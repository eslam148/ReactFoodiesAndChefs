const convertTo12HourFormat = (time24) => {
    // Split the time string into hours and minutes
    const [hour, minute] = time24.split(":").map(Number);

    // Determine AM/PM
    const period = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const hour12 = ((hour + 11) % 12) + 1;

    // Format the result as hh:mm AM/PM
    return `${String(hour12).padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
};

export default convertTo12HourFormat;