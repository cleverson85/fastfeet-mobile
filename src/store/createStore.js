import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middewares) => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middewares))
    : applyMiddleware(...middewares);

  return createStore(reducers, enhancer);
};
