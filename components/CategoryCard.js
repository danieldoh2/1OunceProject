import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'
// import { BlurView } from '@react-native-community/blur';
import { COLORS, FONTS, SIZES } from "../constants"

const CategoryCard =
    ({ containerStyle, categoryItem, onPress }) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 10,
                    borderRadius: SIZES.radius,
                    backgroundColor: 'gray',
                    ...containerStyle
                }}
                onPress={onPress}
            >
                <Image
                    source={categoryItem.image}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: SIZES.radius
                    }}
                />
                <View
                    style={{
                        width: '65%',
                        paddingHorizontal: 20
                    }}
                >
                    <Text
                        style={{
                            flex: 1,
                        }}>
                        {categoryItem.name}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
export default CategoryCard