import './index.css'

const EmojiItem = props => {
  const {details, onClickEmoji} = props
  const {name, imageUrl} = details

  const onEmojiClicked = () => {
    onClickEmoji()
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onEmojiClicked}>
        <img src={imageUrl} className="emoji" alt={name} />
        <p>{name}</p>
      </button>
    </li>
  )
}
export default EmojiItem
