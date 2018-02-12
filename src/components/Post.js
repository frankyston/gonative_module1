import React from 'react';

import { Text, View } from 'react-native';

import styles from 'styles/Styles';

const Post = props => (
  <View style={styles.container_post}>
    <View style={styles.header_post}>
      <Text style={styles.title_post}>{ props.title }</Text>
      <Text style={styles.author_post}>{ props.author }</Text>
    </View>
    <Text style={styles.text_post}>
      { props.description }
    </Text>
  </View>
);

Post.defaultProps = {
  title: 'Title post',
  author: 'Author post',
  description: 'Description post'
}

export default Post;
