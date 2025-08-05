import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { axiosInstance } from '../api';
import {resetBanknote, setBanknotes, setBanknote} from '../store/banknoteSlice';


export default function BanknoteScreen({ route, navigation }) {
    const handlePressBanknotes = () => {
        navigation.navigate('Список купюр');
    };

    const { id } = route.params;
    const dispatch = useDispatch();
    const { banknote } = useSelector((state) => state.banknote);

    useEffect(() => {
        async function getBanknoteById() {
            console.log(id)
            await axiosInstance.get(`/banknotes/${id}`).then((response) => {
                dispatch(setBanknote(response.data));
                console.log(banknote)}).catch((err) => {console.log(err)})
        }
        getBanknoteById();
        // return () => {
        //     dispatch(resetBanknote());
        // };
    }, [dispatch]);

    const newHost = "192.168.1.56";
    console.log(banknote.image_url.String())

    return (
    <ScrollView>
        <View style={styles.page}>
                <View>
                    <Text style={styles.breadcrumb} onPress={handlePressBanknotes}>Список купюр -&gt;</Text>
                        <Text style={styles.textGreen} onPress={handlePressBanknotes}>
                        { "->" + banknote.nominal}
                    </Text>
                </View>
            {banknote != null &&  banknote.nominal != "" && banknote.image_url != undefined &&
            <View style={{margin: 15}}>
                <View>
                    <Image style={styles.image} source={{ uri: banknote.image_url }}/>
                    <View>
                        <Text style={styles.textTitle}>{banknote.nominal}</Text>
                        <Text style={styles.text}>{banknote.description}</Text>
                        <View>
                            <Text style={styles.textTitle}>О купюре:</Text>
                            <Text style={styles.text}>
                                Валюта: {banknote.currency}
                            </Text>
                        </View>
                    </View>
                </View>
            </View> }
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6e608d',
    },
    text: { color: '#f0f0f0', fontSize: 16 },
    textGreen: {color : '#f0f0f0'},
    textTitle: { color: '#f0f0f0', fontSize: 18 , marginTop: 10, marginBottom: 10},
    breadcrumb: { color: '#f0f0f0', fontSize: 16 },
    image: { height: 320, alignSelf: 'stretch' },
});
