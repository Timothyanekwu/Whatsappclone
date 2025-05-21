export default async function ChatIDParams(
    { params, }:
    {params: Promise<{ chatId: string }>}) {

        const chatId = ( await params ).chatId
        return <p> Details about chat { chatId }</p>
        
}