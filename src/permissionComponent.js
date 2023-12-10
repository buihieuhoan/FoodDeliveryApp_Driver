import { StyleSheet, Text, View, Platform } from 'react-native'
import * as Permissions from 'expo-permissions'
import React, {useEffect} from 'react'

const permissionComponent = () => {
    useEffect(() => {
        const checkLocationPermission = async () => {
          const { status } = await Permissions.askAsync(Permissions.LOCATION);
    
          if (status === 'granted') {
            // Quyền đã được cấp
          } else {
            // Quyền không được cấp
          }
        };
    
        checkLocationPermission();
      }, []);
}

export default permissionComponent

const styles = StyleSheet.create({})