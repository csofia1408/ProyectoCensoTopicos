
import {Link} from "react-router-dom"
export function Navigation(){
    return(
        <div>
            <Link to="/respondent">
                <h1>respondent app</h1>
            </Link>
            <Link to='/respondent-create'>create respondent</Link>
        </div>
    );
}
