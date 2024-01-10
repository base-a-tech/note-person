import {SafeAreaView, ScrollView} from 'react-native';
import Header from 'organisms/header';
import commonStyles from 'themes/styles';
import Footer from 'organisms/footer';

export type BaseLayoutProps = {
  headerTitle?: string;
  children: React.JSX.Element;
  [key: string]: any;
};

export const BaseLayout = (props: BaseLayoutProps) => {
  const { children, headerTitle } = props;
  return (
    <SafeAreaView style={commonStyles.colArea}>
      <Header headerText={headerTitle || ''}/>
      <ScrollView style={{...commonStyles.scrollArea}}>
        {children}
      </ScrollView>
      <Footer headerText={props?.headerTitle || ''}/>
  </SafeAreaView>
  );
};