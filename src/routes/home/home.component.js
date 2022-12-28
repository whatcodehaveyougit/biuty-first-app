import { UITitle, UIP, UIIcon, UILink, UIButton } from 'biuty/react';

const Home = () => {

  return (
    <>
        <UITitle
          id="my-id"
          level="1"
          modifiers="large 2"
          label="Page *title*" // This markdown bold not working
          itemProp="name"
        />
        <div>
          <div>
            <UIP
              modifiers="large primary"
              label="This is a <UIP /> element but the *bold* does not show."
              itemProp="description"
            />
            <UILink
              id="my-id"
              rel="noreferrer"
              title="My Link"
              href="https://test.com"
              modifiers="large primary"
              label="A link to something interesting"
              target="_blank"
              // onClick={myHandler}
            />
            <UIIcon // Icon doesn't show??
              id="my-id"
              modifiers="large"
              name="star"
            />
            <UIButton
              id="my-id"
              type="submit"
              label="Lorem ipsum"
              modifiers="large primary"
              // onClick={myClickHandler}
              // onFocus={myFocusHandler}
            />
            <UITitle level='1' label='' />

          </div>
          <div className='flex'>
            <UITitle level='3' label='Title' />
            <UITitle level='3' label='Title' />
          </div>
        </div>
    </>
  )
}

export default Home;