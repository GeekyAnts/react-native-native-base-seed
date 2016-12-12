
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Text, Button } from 'native-base';

import myTheme from '../../themes/base-theme';

const {
  pushRoute,
  replaceAt,
  popRoute,
} = actions;

class Index extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceRoute(route) {
    this.props.replaceAt('index2', { key: route }, this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {  // eslint-disable-line class-methods-use-this
    return (
      <Container theme={myTheme}>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
            React Native - NativeBase Seed
          </Text>
          <Button style={{ alignSelf: 'center' }} onPress={() => this.popRoute()}>
            Previous
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps, bindActions)(Index);
