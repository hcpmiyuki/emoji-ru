/** @jsxImportSource @emotion/react */
import { formStyle } from '../../../../style/components/block/Form'

import SubmitButton from '../../atoms/Button'
import Textarea from '../../atoms/Textarea'
import FormRadioButtons from './FormRadioButtons'

function Form(props) {
  return (
    <form
      onSubmit={(e) => props.onSubmit(e)}
      css={formStyle}
    >
      <Textarea
        width='100%'
        name='tweet'
        maxLength='180'
        rows='6'
        placeholder='180字以内でテキストを入力してください✏️'
      />
      <FormRadioButtons
        name='emojiLevel'
        onChange={(e) => props.onChange(e)}
        emojiLevel={props.emojiLevel}
      />
      <div className='submitButton'>
        <SubmitButton
          buttonLabel='えもじる💫🧙'
          bgColor='#FF8B82'
          color='white'
          fontSize='24px'
          onClick={() => { }}
        />
      </div>
      <p className='errorMsg'>{props.errorMsg}</p>
    </form>
  );
}

export default Form;