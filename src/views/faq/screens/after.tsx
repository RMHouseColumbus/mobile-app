import React from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {Card, CardItem, Container, Content, Text} from 'native-base';
import {mergeLinkText} from '../../link-text-merge/LinkTextMerge';
import BaseScrollablePage from "../../base-page/ScrollablePage";


interface AfterProps extends NavigationScreenProps {
}

interface AfterState {
    afterData: any
}

export default class After extends React.Component<AfterProps, AfterState> {

    public constructor(props) {
        super(props);
        this.state = {
            afterData: []
        }
    }

    onContentUpdate = (content: any) => {

        this.setState({
            afterData: content
        })

    };

    static navigationOptions = {
        title: 'After Your Stay',
        headerStyle: {
            backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
            color: '#000000',
            fontFamily: "System",
            fontSize: 35,
        }
    };

    viewFunction = () => {
        const afterData = this.state.afterData;
        return (
            <Container>
                <Content style={main.body}>
                    {
                        afterData.map((item, index) => {
                            return (
                                <Card key={index} style={main.card}>
                                    <CardItem bordered key={index} style={{borderRadius: 20}}>
                                        <View>
                                            <Text style={main.textType}>After Your Stay</Text>
                                            <Text style={main.textTitle}>{item.question}</Text>
                                            {
                                                mergeLinkText(item.answer, item.links)
                                            }
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                </Content>
            </Container>
        )
    };

    render() {

        return (<BaseScrollablePage contentView={this.viewFunction}
                                    navigation={this.props.navigation}
                                    onContentLoad={this.onContentUpdate}
                                    contentLoad={"afteryourstay"}
                                    back={"Faq"}/>
                                    )
    }
}

const main = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        top: 50
    },
    text: {
        fontFamily: "System",
        fontSize: 20,
        color: 'black'
    },
    card: {
        marginLeft: "7%",
        marginRight: "7%",
        top: "2%",
        width: "86%"
    },
    body: {flex: 10, backgroundColor: "#638dc9"},
    textType: {
        fontFamily: "System",
        fontSize: 12,
        color: 'black'
    },
    textTitle: {
        fontFamily: "System",
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    },
    textContent: {
        marginTop: "1%",
        fontFamily: "System",
        fontSize: 14,
        color: 'black'
    },
});