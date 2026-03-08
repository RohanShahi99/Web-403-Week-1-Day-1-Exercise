class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const e = React.createElement;

    if (this.state.liked) {
      return e('p', null, 'You liked this!');
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('like-button-example')
);