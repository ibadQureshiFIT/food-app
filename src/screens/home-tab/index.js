import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React, {useState} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import {DeliveryBike, DeliveryBoy, RideCar} from 'assets/icons';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import HomeCard from 'components/molecules/home-card';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';

const HomeTab = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const data = ['Allies', 'restaurant', 'bars', 'cafes', 'Italian foods'];
  const food = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemPress = index => {
    setSelectedItemIndex(index);
  };
  const renderFoodItem = ({item}) => (
    <HomeCard
      item={item}
      onPress={() =>
        props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      }
    />
  );
  return (
    <View style={styles.container}>
      <HomeHeader
        placeholder={'Search for restaurants'}
        title={'New York City'}
        back={true}
        isSearch={true}
      />

      <View style={{marginTop: mvs(10)}}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Row>
                <View style={styles.icons}>
                  <RideCar />
                  <Bold label={'Ride'} />
                </View>
                <View style={styles.icons}>
                  <DeliveryBike />
                  <Bold label={'Delivery'} />
                </View>
                <View style={styles.icons}>
                  <DeliveryBoy />
                  <Bold label={'Pick up'} />
                </View>
              </Row>
              <View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  style={{marginTop: mvs(20)}}
                  horizontal={true}>
                  {data.map((item, index) => (
                    <TouchableOpacity
                      style={[
                        styles.itemContainer,
                        selectedItemIndex === index && styles.selectedItem,
                      ]}
                      onPress={() => handleItemPress(index)}
                      key={index}>
                      <Regular
                        style={[
                          styles.itemText,
                          selectedItemIndex === index &&
                            styles.selectedItemText,
                        ]}
                        label={item}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          }
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          // columnWrapperStyle={styles.columnWrapperStyle}

          data={food}
          renderItem={renderFoodItem}
          keyExtractor={(item, index) => index?.toString()}
        />
      </View>
    </View>
  );
};
export default HomeTab;
