import React, { useState } from "react";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Svg, Image, ClipPath, Ellipse } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSpring,
  withSequence,
} from "react-native-reanimated";

import styles from "./styles";

// const onboardImage = require("./assets/m04.jpg");
const onboardImage = require("./assets/m01.jpg");

export default function App() {
  const [isRegister, setIsRegister] = useState(false);

  const { width, height } = Dimensions.get("window");

  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);

  const imageAnimatedStyled = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.5, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonAnimatedStyled = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const xAnimatedStyled = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 500 }) },
      ],
    };
  });

  const formAnimatedStyled = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(500, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonStyled = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegister) {
      setIsRegister(false);
      //if u use gesture handler, d hr lo dl, a khu ka m pr ll ya dl
      runOnJS(setIsRegister)(false);
    }
  };
  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegister) {
      setIsRegister(true);
      runOnJS(setIsRegister)(true);
    }
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyled]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={onboardImage}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidyMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View style={[styles.x, xAnimatedStyled]}>
          <TouchableOpacity onPress={() => (imagePosition.value = 1)}>
            <Text>X</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      <Animated.View style={styles.secContainer}>
        <Animated.View style={buttonAnimatedStyled}>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyled}>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.inputForm, formAnimatedStyled]}>
          <TextInput
            placeholder="Email :"
            placeholderTextColor="#B99B6B"
            style={styles.textInput}
          />
          {isRegister && (
            <TextInput
              placeholder="Full Name :"
              placeholderTextColor="#B99B6B"
              style={styles.textInput}
            />
          )}
          <TextInput
            placeholder="Password :"
            placeholderTextColor="#B99B6B"
            style={styles.textInput}
          />
          <Animated.View style={[styles.formButton, formButtonStyled]}>
            <Pressable
              onPress={() =>
                (formButtonScale.value = withSequence(
                  withSpring(1.5),
                  withSpring(1)
                ))
              }
            >
              <Text style={styles.buttonText}>
                {isRegister ? "Register" : "Log In"}
              </Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}
