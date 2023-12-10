import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useWindowDimensions } from 'react-native';
import  Geolocation  from 'react-native-geolocation-service'

const MapComponent = () => {
    const { width, height } = useWindowDimensions();
    const [region, setRegion] = useState(null);

    useEffect(() => {
        // Lấy vị trí hiện tại
        Geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            // Cập nhật state với vị trí hiện tại
            setRegion({
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        },
        (error) => {
            console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []); // Chỉ chạy một lần khi component được mount

    return (
        <MapView
            style={{ height, width }}
            showsUserLocation
            followsUserLocation
            initialRegion={region} // Sử dụng vị trí từ state
        >
            {region && <Marker coordinate={region} title="You are here" />}
        </MapView>
    )
}

export default MapComponent
