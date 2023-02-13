import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import './index.css'

class Feedback extends Component {
  state = {notClicked: true}

  onClickEmoji = () => {
    const {notClicked} = this.state
    if (notClicked === false) {
      this.setState({notClicked: true})
    } else {
      this.setState({notClicked: false})
    }
  }

  render() {
    const {resources} = this.props
    const {notClicked} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {notClicked ? (
          <div className="emoji-card">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachEmoji => (
                <EmojiItem
                  details={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="thank-container">
            <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="context">
              We will use your feedback to improve to our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
