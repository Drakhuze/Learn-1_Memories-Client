import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, collapseClasses } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

import './styles.css';
import { ClassNames } from "@emotion/react";

const Post = ({ post, setCurrentId }) => {
    return (
        <Card className={"post--card"}>
            <CardMedia className={"post--media"} image={post.selectedFile} title={post.title} />
            <div className={"post--overlay"}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="post--overlay2">
                <Button style={{ color: "white" }} size="small" onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={"post--details"}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={"post--title"} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className="post--cardActions">
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;