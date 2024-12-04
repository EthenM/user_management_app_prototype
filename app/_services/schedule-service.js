export const getSchedules = () => {
    return new Promise((resolve, reject) => {
        const schedules = [
            {
                id: 1,
                startTime: new Date('2024-12-04T12:00:00+00:00'),
                endTime: new Date('2024-12-04T13:00:00+00:00'),
                primaryInstructor: 'Bob Test',
                level: getSchedules.levels.STARTER,
                classSize: 3
            },
            {
                id: 2,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'Bob Best',
                level: getSchedules.levels.INTERMEDIATE,
                classSize: 3
            },
            {
                id: 3,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'John Doe',
                level: getSchedules.levels.ADVANCED,
                classSize: 3
            },
            {
                id: 4,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'Bob Test',
                level: getSchedules.levels.STARTER,
                classSize: 3
            },
            {
                id: 5,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'John Doe',
                level: getSchedules.levels.INTERMEDIATE,
                classSize: 3
            },
            {
                id: 6,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'Bob Test',
                level: getSchedules.levels.ADVANCED,
                classSize: 3
            },
            {
                id: 7,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'John Doe',
                level: getSchedules.levels.STARTER,
                classSize: 3
            },
            {
                id: 8,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'Bob Test',
                level: getSchedules.levels.INTERMEDIATE,
                classSize: 3
            },
            {
                id: 9,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'John Doe',
                level: getSchedules.levels.ADVANCED,
                classSize: 3
            },
            {
                id: 10,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'Bob Test',
                level: getSchedules.levels.STARTER,
                classSize: 3
            },
            {
                id: 11,
                startTime: new Date('2024-12-04T21:13:53+00:00'),
                endTime: new Date('2024-12-04T21:13:53+00:00'),
                primaryInstructor: 'John Doe',
                level: getSchedules.levels.INTERMEDIATE,
                classSize: 3
            },
        ]

        if (schedules.length > 0) {
            resolve(schedules);
        } else {
            //shouldn't have to reject this one.
            reject("No schedules found.")
        }

    })
}

/**
 * @enum
 */
getSchedules.levels = Object.freeze({
    STARTER: 1,
    INTERMEDIATE: 2,
    ADVANCED: 3,
})
