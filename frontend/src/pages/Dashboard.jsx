import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard(){
    return <div>
        {/* Dashboard */}
        <Appbar />
        <div className="m-8">
        <Balance value={'10,005'}/>
        <Users/>
        </div>
    </div>
}
