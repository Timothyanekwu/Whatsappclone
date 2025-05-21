export default async function StatusIDParams(
    {params,}:{ params: Promise<{ statusId: string }>}) {
    const statusId = ( await params ).statusId;
    return <p> Details about status { statusId }</p>    
}