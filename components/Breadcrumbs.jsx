import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Breadcrumbs({ navigation, pages }) {
    const handlePressBanknotes = () => {
        navigation.navigate('Список купюр');
    };

    return (
    <View>
        <View>
            <Text style={styles.breadcrumb} onPress={handlePressBanknotes}>Список купюр</Text>
            {pages && pages.map((page) => (
                <Text style={styles.breadcrumb} onPress={handlePressBanknotes}>
                    { " / " + page.banknote.banknotes_list.nominal }
                </Text>
            ))}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    breadcrumb: { color: '#f0f0f0', fontSize: 16 }
});
