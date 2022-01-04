import { Component, createElement } from 'react';

export default class extends Component {
  constructor(...params) {
    super(...params);

    this.state = { error: null, stack: null };
  }

  static getDerivedStateFromProps(props, state) {
    const { error = state.error } = props;
    const { stack } = state;

    return { error, stack };
  }

  static getDerivedStateFromError(error, stack) {
    return { error, stack };
  }

  render() {
    const {
      props: { children, render },
      state: { error },
    } = this;

    return error ? createElement(render, { error }) : children;
  }
}
