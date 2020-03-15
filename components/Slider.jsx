import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native';
import ViewSlider from 'react-native-view-slider'
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const Slider = ({ slides }) => {
    return (
        <ViewSlider
            renderSlides={
                <>
                    <View style={styles.viewBox}>
                        <Image source={{ uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' }} style={{ height: 200, width }} />
                    </View>
                    <View style={styles.viewBox}>
                        <Image source={{ uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' }} style={{ height: 200, width }} />
                    </View>
                    <View style={styles.viewBox}>
                        <Image source={{ uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' }} style={{ height: 200, width }} />
                    </View>
                </>
            }
            style={styles.slider}     //Main slider container style
            height={200}    //Height of your slider
            slideCount={3}    //How many views you are adding to slide
            dots={true}     // Pagination dots visibility true for visibile 
            dotActiveColor='#A7A9BE'     //Pagination dot active color
            dotInactiveColor='#000'    // Pagination do inactive color
            dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
            autoSlide={true}    //The views will slide automatically
            slideInterval={5000}    //In Miliseconds
        />
    )
}

Slider.defaultProps = {

}

// const ViewBox = styled.View`
//         padding: 10px;
//         padding-left: 20px;
//         padding-right: 20px;
//         justify-content: 'center';
//         width: width;
//         align-items: 'center';
//         height: 150px;
// `;

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 150,
        borderRadius: 6
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        borderRadius: 6
    },
    dotContainer: {
        backgroundColor: 'transparent',
        marginTop: 20
    }
});

export default Slider;