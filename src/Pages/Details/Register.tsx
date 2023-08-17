import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_CONTENT, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils'
import { IconAskeli, IconFacebook, IconGoogle, IconTwitter } from 'assets'

const Register = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#f5f5f5"
        }}>
            <View style={{
                marginTop: 100,
            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <IconAskeli />
                </View>
                <Text
                    style={{
                        paddingLeft: 30,
                        paddingBottom: 22,
                        fontSize: 17,
                        fontWeight: 'bold',
                        paddingTop: 50
                    }}
                >Create your Account</Text>
                <View style={{
                    width: 300,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    marginHorizontal: 30,
                    justifyContent: 'center',
                    borderRadius: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}>
                    <TextInput
                        placeholder=" Enter your email"
                        style={{
                            paddingLeft: 15,
                            color: WARNA_CONTENT
                        }} />
                </View>

                <View style={{
                    marginTop: 13,
                    width: 300,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    marginHorizontal: 30,
                    justifyContent: 'center',
                    borderRadius: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}>
                    <TextInput
                        placeholder=" Enter your password"
                        secureTextEntry={true}
                        style={{
                            paddingLeft: 15,
                            color: WARNA_CONTENT
                        }} />
                </View>

                <View style={{
                    marginTop: 13,
                    width: 300,
                    height: 50,
                    backgroundColor: WARNA_PUTIH,
                    marginHorizontal: 30,
                    justifyContent: 'center',
                    borderRadius: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}>
                    <TextInput
                        placeholder="Confirm password"
                        secureTextEntry={true}
                        style={{
                            paddingLeft: 15,
                            color: WARNA_CONTENT
                        }} />
                </View>

                <TouchableOpacity>
                    <View style={{
                        marginTop: 13,
                        width: 300,
                        height: 50,
                        backgroundColor: WARNA_PRIMARY,
                        marginHorizontal: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 7,
                    }}>
                        <Text
                            style={{
                                paddingLeft: 15,
                                color: WARNA_PUTIH,
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}
                        >Sign up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    textAlign: 'center',
                    color: WARNA_CONTENT,
                    paddingTop: 20
                }}
            >Or sign up with</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
                marginTop: 32
            }}>

                <TouchableOpacity>
                    <View style={{
                        backgroundColor: WARNA_PUTIH,
                        width: 95,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    }}>
                        <IconGoogle />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        backgroundColor: WARNA_PUTIH,
                        width: 95,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    }}>
                        <IconFacebook />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        backgroundColor: WARNA_PUTIH,
                        width: 95,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    }}>
                        <IconTwitter />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 30
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: WARNA_CONTENT
                }}>Do you have an account ?</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Beranda')}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: WARNA_PRIMARY
                    }}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({})