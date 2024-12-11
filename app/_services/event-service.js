export const getUpcomingEvents = () => {
    return new Promise((resolve, reject) => {
        const events = [
            {
                id: 1,
                title: "Bear Hug: Live in concert"
            },
            {
                id: 2,
                title: "Six Fingers - DJ Set"
            },
            {
                id: 3,
                title: "We All Look The Same"
            },
            {
                id: 4,
                title: "Viking People"
            },
        ]

        if (events.length > 0) {
            resolve(events);
        } else {
            //shouldn't have to reject this one.
            reject("No schedules found.")
        }

    })
}
