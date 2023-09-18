import React from "react";
import { Dimensions, StyleSheet,Text,View } from "react-native";
import Pdf from "react-native-pdf";

export const PDFViewPage = () => {

    const source = { uri: 'https://edunext-main-storage-cf.edunexttechnologies.com/edu_test/school___static/1694760467797_Get_Started_With_Smallpdf.pdf', cache: true };
  return (
    // <View style={styles.container}>
      <Pdf
      trustAllCerts={false}
        source={{
            uri:'https://edunext-main-storage-cf.edunexttechnologies.com/edu_test/school___static/1694760467797_Get_Started_With_Smallpdf.pdf',
            cache: true,
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    //   <Text>Hye</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
