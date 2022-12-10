import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'
const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = itemData => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            })
        }
        return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
    }
    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
    />
}

export default CategoriesScreen;