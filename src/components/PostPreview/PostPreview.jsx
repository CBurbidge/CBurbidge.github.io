import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostTags from "../PostTags/PostTags";
import "./PostPreview.scss";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {
    const { postInfo } = this.props;
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--12"  >
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          <CardTitle
            title={postInfo.title}
            subtitle={`Published on ${postInfo.date} - ${postInfo.timeToRead} min read`}
          />
          <CardText >
            <p style={{textAlign: "center"}}>{postInfo.excerpt}</p>
          </CardText>
        </Link>
        <PostTags tags={postInfo.tags} />
      </Card>
    );
  }
}

export default PostPreview;
