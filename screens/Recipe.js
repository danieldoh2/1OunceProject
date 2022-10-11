import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';
// import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import { SIZES, FONTS, COLORS, icons } from '../constants';

const Recipe = ({ navigation, route }) => {

    const scrollY = useRef(new Animated.Value(0)).current;

    const [selectedRecipe, setSelectedRecipe] = React.useState(null)

    React.useEffect(() => {
        let { recipe } = route.params
        setSelectedRecipe(recipe)
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View></View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 30,
                            marginVertical: 5
                        }}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 50,
                                width: 50,
                                borderRadius: 5,
                                backgroundColor: 'gray'
                            }}
                        >
                            <Image
                                source={item.icon}
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: 'center'
                            }}>
                            <Text>{item.description} </Text>
                        </View>

                        <View
                            style={{
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                            <Text> {item.quantity} </Text>
                        </View>

                    </View>

                )}
            />
        </View>
    )
}

export default Recipe;