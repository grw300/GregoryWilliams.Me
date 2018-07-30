import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                cover: postEdge.node.frontmatter.cover,
                title: postEdge.node.frontmatter.title,
                summary: postEdge.node.frontmatter.summary,
                date: postEdge.node.fields.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead
            });
        });
        return postList;
    }
    render() {
        const postList = this.getPostList();
        return (
            <div>
                {postList.map(post => (
                    <Link to={post.path} key={post.title}>
                        <h1>{post.title}</h1>
                        <h2>{post.summary}</h2>
                    </Link>
                ))}
            </div>
        );
    }
}

export default PostListing;
