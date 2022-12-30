import { UITitle, UIP, UIButton } from 'biuty/react';
import { useState } from 'react';

const Mixins = () => {

  const [buttonState, setButtonState] = useState();


  return (
    <>
      <div>
        <UITitle level='3' label='Mixins, are modifiers..?' />
        <UIP modifiers='' label='Ellipsis, label, where do I find the default styles etc?' />
        <UIP modifiers='funky-text' label='This is some funky text, but how do I make it red?' />
        <UIP modifiers='super-funky-text' label='This is super funky text' />

        <div className='margin-top-1'>
          <UIButton
            type='submit'
            label='Disabled Btn'
            modifiers='btn disabled' >
          </UIButton>
          <UIButton
            type='submit'
            label='Primary Color'
            modifiers='btn primary' >
          </UIButton>
          <UIButton
            type='submit'
            label='Click Me'
            modifiers={buttonState ? 'btn success' : 'btn'}
            onClick={() => setButtonState(buttonState => !buttonState) } >
          </UIButton>
        </div>
      </div>
    </>
  )
}

export default Mixins;