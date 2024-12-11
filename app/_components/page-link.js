export default function PageLink({ pageName, pagePath, children }) {


    return (
        <li className={"p-3" + (location.pathname.toLowerCase() == pagePath.toLowerCase() ? " border-l-4 border-black" : "")}>
            <a href={pagePath} className="flex gap-3 items-center">
                
                {/* the children should be the icon */}
                { children }

                <p className="capitalize text-sm font-medium">{pageName}</p>
            </a>
        </li>
    )
}
