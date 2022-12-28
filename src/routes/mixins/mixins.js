import { UITitle, UIP, UIButton } from 'biuty/react';
import { useState } from 'react';

const Mixins = () => {

  const [buttonState, setButtonState] = useState();


  return (
    <>
      <div>
        <UITitle level='3' label='Mixins, questions' />
        <UIP modifiers='' label='Ellipsis, label, where do I find the default styles etc?' />
        <UIP modifiers='funky-text' label='This is some funky text, but how do I make it red?' />
        <UIP modifiers='super-funky-text' label='This inherits funky text but is also super too' />

        <div className='margin-top-1'>
          <UIButton type='submit' label='Click me' onClick={() => setButtonState(buttonState => !buttonState) } modifiers={buttonState ? 'btn btn-success' : 'btn'} />
        </div>
      </div>
    </>
  )
}

export default Mixins;