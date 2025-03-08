const getNotificationDuration = (date, language) => {
    const currentDate = new Date();
    const notificationDate = new Date(date);
    const diffTime = Math.abs(currentDate - notificationDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (language === "en") {
        if (diffDays > 0) {
            return `${diffDays} days ago`;
        } else if (diffDays <= 0) {
            return `Today`;
        }
    } else {
        if (diffDays > 0) {
            return `${diffDays} أيام مضت`;
        } else if (diffDays <= 0) {
            return `اليوم`;
        }
    }
}

export default getNotificationDuration;