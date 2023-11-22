export function RespondentCard({ respondent }){
    return(
        <div >
            <h1 className="text-white font-bold uppercase rounded-lg">{respondent.name}</h1>
            <p className="text-slate-400">{respondent.form_number}</p>
            <hr/>
        </div>
    );
}