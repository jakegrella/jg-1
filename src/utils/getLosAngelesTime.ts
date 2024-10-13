const getLosAngelesTime = () => {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    
    const currentTimeInLA = new Intl.DateTimeFormat('en-US', options).format(new Date());
    return currentTimeInLA;
}

export default getLosAngelesTime;
