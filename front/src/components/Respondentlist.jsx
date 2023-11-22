import { useEffect, useState } from "react"
import {getAllRespondent} from '../api/respondent.api'
import { useNavigate } from "react-router-dom";

export function RespondentList(){
    const navigate = useNavigate()
    const [respondents, setRespondent] = useState([]);

    useEffect(() =>{
        async function loadRespondent(){
            const res =await getAllRespondent()
            setRespondent(res.data)
        }
        loadRespondent();
    },[]);

    return  <div>
            {respondents.map(respondent =>(
                    <div style={{background: "orange"}} key={respondent.id}
                    
                    
                    onClick={()=>{
                    navigate('/respondent/' + respondent.id)
            }}
                    >
                        <h1 className="text-green font-bold uppercase rounded-lg">{respondent.name}</h1>
                        <p>{respondent.form_number}</p>
                        <hr/>
                    </div>
                    ))}
            </div>;
        
}