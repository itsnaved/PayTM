import { Link } from "react-router-dom";

export function BottomHeading({label, buttonText, to}){
    return <div className="flex justify-center font-semibold text-center py-2 text-sm">
        <div>
        {label} 
        </div>
        <Link to={to} className="underline pointer cursor-pointe pl-2">
            {buttonText}
        </Link>

    </div>
}