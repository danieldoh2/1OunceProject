import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, dummyData, FONTS, SIZES } from '../constants';
import { CategoryCard } from '../components';

const Home = ({ navigation }) => {

    function Headline() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 40
                }}
            >
                <Text
                    style={{
                        color: 'black'
                    }}> Hello. What would you like to eat today?</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <Headline></Headline>
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                    )
                }

                }



            />

        </SafeAreaView>
    )
}

export default Home;