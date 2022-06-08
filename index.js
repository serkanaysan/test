import React from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const PickerSelect = () => {

    return <View style={{ padding: 10, backgroundColor: 'purple' }}>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
    </View>
}

export default PickerSelect
