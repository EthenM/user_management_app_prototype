export default function ToggleSwitch({ checked, setChecked }) {
    return (
        /*
         * ToggleSwitch based on tutorial:
         *  https://blog.theashishmaurya.me/switch-component-with-react-tailwind-css
         */

        <div
            className={"md:w-7 md:h-4 w-6 h-3 flex items-center rounded-full p-1 cursor-pointer" + 
                (checked ? " bg-green-300" : " bg-gray-300")}
            onClick={() => {
                setChecked(!checked);
            }}
        >
            {/* Switch */}
            <div
                className =  {"bg-white md:w-3 md:h-3 h-2 w-2 rounded-full shadow-md transform" +
                    (checked ? " transform translate-x-2" : null)}
            >
            </div>
        </div>
    )
}
