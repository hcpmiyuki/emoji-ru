/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import RadioButton from '../../atoms/RadioButton'

function FormRadioButtons(props) {

  const radioButtons = css`
    li {
      display: inline;
      padding-right: 20px;
    }
  `;

  const options = ['普通🙂', 'にぎやか✨', '盛り盛り🤩']

  return (
    <ul css={radioButtons}>
      {
        options.map((value, index) => (
          <li key={index}>
            <RadioButton 
              value={(index+1).toString()}
              name={props.name}
              onChange={(e) => props.onChange(e)}
              text={value}
              checked={props.emojiLevel === (index+1).toString()}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default FormRadioButtons;