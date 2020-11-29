import React, { useEffect } from 'react';
import { useRef } from 'react';
import {View, TextInput, Animated, StyleSheet} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const DoughnutChart = () => {
    const percentage = 30;
    const radius = 70;
    const strokeWidth = 10;
    const duration = 500;
    const color = '#03AC13';
    const delay = 0;
    const textColor='black';
    const max = 100
    const halfCircle = radius+strokeWidth;
    const circleCircumference = radius*2*Math.PI;
    const circleRef = useRef();
    const inputRef = useRef();

    const animatedValue = useRef(new Animated.Value(0)).current;
    const animation = (toValue: number) => {
        return Animated.timing(animatedValue, {
            toValue,
            delay,
            useNativeDriver: true,
        }).start();
    }
    
    useEffect(()=> {
        animation(percentage);
        animatedValue.addListener(v => {
            if(circleRef?.current){
                const maxPercentage = 100*v.value/max;
                const strokeDashoffset = 
                    circleCircumference - (circleCircumference * maxPercentage)/100;
                circleRef.current.setNativeProps({
                    strokeDashoffset
                });
            }
            if(inputRef?.current){
                inputRef.current.setNativeProps({
                    text: `${Math.round(v.value)}%`
                })
            }
        });
        return () => {
            animatedValue.removeAllListeners();
        }
    }, [max, percentage]);
    
    return (
        <View>
            <Svg width={radius*2} height={radius*2} viewBox={`0 0 ${halfCircle *2} ${halfCircle*2}`}>
                <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.2}
                    />
                    <AnimatedCircle
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap='round'
                    />
                </G>
            </Svg>
            <TextInput
                ref={inputRef}
                underlineColorAndroid='transparent'
                editable={false}
                defaultValue="0"
                style={[
                    StyleSheet.absoluteFillObject,
                    {fontSize: radius/2, color: textColor??color},
                    {fontWeight: '900', textAlign: 'center'}
                ]}
            />
        </View>
    );
}

export default DoughnutChart;