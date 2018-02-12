import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  headerTop: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container_post: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 20,
    margin: 10,
  },
  header_post: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 10,
  },
  title_post: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  author_post: {
    color: '#999999',
  },
  text_post: {
    color: '#666666',
  }
});
