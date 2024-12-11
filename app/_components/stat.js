export default function AppStat({ title, value, changeFromLastPeriod }) {

    return (
        <section className="border-t-2 flex-grow pt-8">
            <h3 className="font-bold text-sm mb-5 capitalize">{title}</h3>
            <p className="font-bold text-2xl mb-3">{value}</p>
            <p className="text-xs font-medium text-gray-400">
                <span
                    className={"rounded-lg p-1 " + ( changeFromLastPeriod.startsWith('+')
                        ? "text-green-500 bg-green-100"
                        : "text-red-500 bg-red-100")}
                >
                    {changeFromLastPeriod}
                </span> from last week
            </p>
        </section>
    )

}
