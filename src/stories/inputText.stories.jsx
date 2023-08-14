import { InputTypeText } from '../components/inputForm'
import PropTypes from 'prop-types'

const stories = {
  title: 'InputTypeText',
  component: InputTypeText
}

export default stories

const TemplateStory = (args) => <InputTypeText {...args} />

const inputEmail = TemplateStory.bind({})

inputEmail.args = {
  value:'',
  placeHolder:'email'
}

inputEmail.propTypes = {
  value: PropTypes.string.isRequired
}

export { inputEmail }