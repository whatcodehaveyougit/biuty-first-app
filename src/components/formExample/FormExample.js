

const FormExample = () => {


  return (

    <>
      <form>
        <UITextfield
          id="my-id"
          modifiers="large"
          name="test"
          type="text"
          autofocus
          value="Hello"
          size={14}
          maxlength={14}
          autocomplete="on"
          placeholder="Type here..."
        />
        <UIButton
          id="my-id"
          type="submit"
          label="Lorem ipsum"
          modifiers="large primary"
          onClick={myClickHandler}
          onFocus={myFocusHandler}
        />

      </form>


    </>

  )
}

export default FormExample;