import React, { Component } from "react";
import firebase from "firebase";

class FirebaseImage extends Component {
  static defaultProps = {
    width: 100,
    height: 100
  };

  state = {
    url: null
  };

  componentDidMount() {
    if (this.props.src) {
      firebase
        .storage()
        .ref()
        .child(this.props.src)
        .getDownloadURL()
        .then(url => {
          this.setState({
            url
          });
        });
    }
  }

  render() {
    const { url } = this.state;
    const { width, height } = this.props;
    if (url) {
      return <img src={url} width={width} height={height} alt={url} />;
    }
    return <div> Loading</div>;
  }
}

export default FirebaseImage;
