// ShopScreen.js
import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { axiosInstance } from '../api';

import { setSearchValue } from '../store/filterSlice';
import { banknoteSlice, setBanknotes } from '../store/banknoteSlice';

import BanknoteCard from '../components/BanknoteCard';
import Breadcrumbs from '../components/Breadcrumbs';


export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const { banknotes_list } = useSelector((state) => state.banknote);
    const { searchValue } = useSelector((state) => state.filter);

    useEffect(() => {
        async function getAllBanknotes() {
            try {
                const response = await axiosInstance.get(`/banknote?banknote_name=${searchValue}`);
                dispatch(setBanknotes(response?.data.banknotes));
            } catch (error) {
                console.error('Error fetching banknotes:', error);
            }
        }
        getAllBanknotes();
    }, [dispatch, searchValue]);

    const onTextChange = (text) => {
        dispatch(setSearchValue(text));
        console.log(text);
    };

    return (
        <ScrollView>
            <View style={styles.page}>
                <Breadcrumbs pages={[]} navigation={navigation} />
                <TextInput
                    style={styles.input}
                    onChangeText={onTextChange}
                    value={searchValue}
                />
                {!!banknotes_list &&
                    banknotes_list.map((banknote) => <BanknoteCard key={banknote.banknote_id} {...banknote} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#453b64',
    },
    input: {
        height: 40,
        margin: 8,
        width: 320,
        padding: 10,
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#6e608d',
        borderRadius: 8,
    },
});
