import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../actions';

class TweetList extends Component {
  componentDidMount() {
    this.props.fetchTweets('javascript');
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.queryTerm !== nextProps.queryTerm) {
      this.props.fetchTweets(nextProps.queryTerm)
    }
  }

  renderTweets() {
    const { tweets } = this.props;
    if (!tweets) {
      return <div>Loading...</div>;
    }

    return tweets.map((tweet, index) => {
      return (
        <div key={index} className="card">
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {tweet.title}
            </span>
            <img src={tweet.thumbnail} alt={tweet.thumbnail}/>
            <div dangerouslySetInnerHTML={{ __html: tweet.description }} />
            <div>{new Date(tweet.pubDate).toLocaleString()}</div>
          </div>

          <div className="card-reveal">
            <div>
              <span className="card-title grey-text text-darken-4">{tweet.title}<i className="material-icons right">close</i></span>
              <div>{new Date(tweet.pubDate).toLocaleString()}</div>
            </div>
          </div>

        </div>
      );
    });
  }

  render() {
    return <div>{this.renderTweets()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets.tweets,
    queryTerm: state.queryTerm.queryTerm.queryTerm
  };
}

export default connect(mapStateToProps, { fetchTweets })(TweetList);
