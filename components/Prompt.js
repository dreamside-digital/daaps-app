import React from 'react'
import ReactMarkdown from 'react-markdown'
import AriaModal from 'react-aria-modal'
import Parallax from 'parallax-js'
import breaks from 'remark-breaks'

const categories = ['make', 'sense', 'seek', 'care']

const unescape = text => text.replace(/\\/g, '')

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.scene = React.createRef();
  }

  componentDidMount() {
    this.parallax = new Parallax(this.scene.current)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }

  render () {
    const { prompt, onCancel, closed } = this.props
    const content = prompt.fields
    const number = content.uid
    const category = content.category ? content.category : categories[content.uid % 4]

    return (
      <AriaModal titleText={`Prompt #${number}`} onExit={onCancel} focusDialog={true}>
        <div className={`overflow-hidden backdrop fixed inset-y-0 inset-x-0 h-screen w-screen bg-black flex justify-center items-center prompt ${closed ? 'closed' : 'open'}`}>
          <div className={`h-full w-full overflow-hidden card-container relative bg-${category}`}>
            <div className="absolute h-full w-full inset-y-0 inset-x-0 card bg-white" />
            <div className={`absolute h-full w-full inset-y-0 inset-x-0 card-bg`} ref={this.scene}>
              <div className="bg-a h-full w-full absolute" data-depth="0.20" />
              <div className="bg-b h-full w-full absolute" data-depth="0.40" />
              <div className="bg-c h-full w-full absolute" data-depth="0.60" />
              <div className="bg-d h-full w-full absolute" data-depth="0.80" />
            </div>
            <div className="content absolute flex flex-col flex-grow h-full w-full justify-between">
              <header className="p-5">
                <div className="mb-2 font-serif text-green">{number}</div>
                { content.title && <h2 className="text-2xl mb-2 font-serif text-green">{content.title}</h2>}
              </header>
              <main className="px-14 flex-grow overflow-auto">
                <ReactMarkdown className="mb-12 font-sans text-lg whitespace-pre-wrap">{unescape(content.prompt)}</ReactMarkdown>
                { content['help text'] &&
                  <div className="mb-5">
                    <div className="flex align-center text-green">
                      <span className="font-serif text-green text-2xl mr-1">*</span>
                      <ReactMarkdown className="whitespace-pre-wrap">{unescape(content['help text'])}</ReactMarkdown>
                    </div>
                  </div>
                }
              </main>
              <div className="p-5 flex flex-col justify-center overflow-auto">
                <div className="flex justify-center">
                  <button className="bg-white px-4 py-2 border text-green border-green font-serif btn" onClick={onCancel}>EXIT</button>
                </div>
                <div className="text-center my-5">#DirectionsToNowhere</div>
              </div>
            </div>
          </div>
        </div>
      </AriaModal>
    )

  }
}

export default Prompt
