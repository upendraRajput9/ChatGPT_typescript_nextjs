import { SunIcon,BoltIcon,ExclamationCircleIcon } from '@heroicons/react/24/outline'
function ChatPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold md-20">ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8"/>
           
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>Explain quantum computing in simple terms</p>
            <p className="infoText">Got any creative ideas for a 10 year old’s birthday?</p>
            <p className="infoText">How do I make an HTTP request in Javascript?</p>
          </div>
        </div>


        
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8"/>
           
            <h2 >Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Remembers what user said earlier in the conversation</p>
            <p className="infoText">Allows user to provide follow-up corrections</p>
            <p className="infoText">Trained to decline inappropriate requests</p>
          </div>
        </div>



        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationCircleIcon className="h-8 w-8"/>
  
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
