import { connect } from "react-redux";
import Posts from "../components/Posts";

function PostList(newPost) {
  return (
    <div>
      {newPost.map((post) => {
        return <Posts post={post} key={post.id} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    newPosts: state.props,
  };
}

export default connect(mapStateToProps, null)(PostList);
