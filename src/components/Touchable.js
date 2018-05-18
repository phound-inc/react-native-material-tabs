// @flow

import * as React from 'react';
import {
  Platform,
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

type TouchableProps = {
  style: ViewStyle,
  onPress: () => void,
  children: React.Node,
};

const Touchable = (props: TouchableProps) =>
  Platform.OS === 'ios' ? (
    <TouchableWithoutFeedback style={props.style} onPress={props.onPress}>
      {props.children}
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={props.style}>{props.children}</View>
    </TouchableWithoutFeedback>
  );

export default Touchable;
