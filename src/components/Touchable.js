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

const Touchable = (props: TouchableProps) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={props.style}>{props.children}</View>
    </TouchableWithoutFeedback>
);
//  Platform.OS === 'ios' ? (
//    <TouchableOpacity style={props.style} onPress={props.onPress}>
//      {props.children}
//    </TouchableOpacity>
//  ) : (
//    <TouchableNativeFeedback onPress={props.onPress}>
//      <View style={props.style}>{props.children}</View>
//    </TouchableNativeFeedback>
//  );

export default Touchable;
