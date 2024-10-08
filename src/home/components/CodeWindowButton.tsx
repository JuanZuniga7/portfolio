'use serer';

export default async function CodeWindowButton({color}:{color: string}){
    return(
        <div className={`h-3 w-3 rounded-full ${color}`}/>
    )
}